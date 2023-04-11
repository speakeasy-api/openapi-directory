import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message to undelete tenant project resource previously deleted from the tenancy unit.
 */
export declare class UndeleteTenantProjectRequest extends SpeakeasyBase {
    /**
     * Required. Tag of the resource within the tenancy unit.
     */
    tag?: string;
}
