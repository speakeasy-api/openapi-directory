import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message to remove a tenant project resource from the tenancy unit.
 */
export declare class RemoveTenantProjectRequest extends SpeakeasyBase {
    /**
     * Required. Tag of the resource within the tenancy unit.
     */
    tag?: string;
}
