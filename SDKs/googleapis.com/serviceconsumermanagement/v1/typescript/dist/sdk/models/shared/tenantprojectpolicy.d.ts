import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyBinding } from "./policybinding";
/**
 * Describes policy settings that can be applied to a newly created tenant project.
 */
export declare class TenantProjectPolicy extends SpeakeasyBase {
    /**
     * Policy bindings to be applied to the tenant project, in addition to the 'roles/owner' role granted to the Service Consumer Management service account.
     */
    policyBindings?: PolicyBinding[];
}
