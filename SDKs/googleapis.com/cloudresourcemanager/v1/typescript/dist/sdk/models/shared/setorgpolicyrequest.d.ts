import { SpeakeasyBase } from "../../../internal/utils";
import { OrgPolicy } from "./orgpolicy";
/**
 * The request sent to the SetOrgPolicyRequest method.
 */
export declare class SetOrgPolicyRequest extends SpeakeasyBase {
    /**
     * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
     */
    policy?: OrgPolicy;
}
