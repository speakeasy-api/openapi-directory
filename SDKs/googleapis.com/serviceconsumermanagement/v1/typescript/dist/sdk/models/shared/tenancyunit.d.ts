import { SpeakeasyBase } from "../../../internal/utils";
import { TenantResource } from "./tenantresource";
/**
 * Representation of a tenancy unit.
 */
export declare class TenancyUnit extends SpeakeasyBase {
    /**
     * Output only. @OutputOnly Cloud resource name of the consumer of this service. For example 'projects/123456'.
     */
    consumer?: string;
    /**
     * Output only. @OutputOnly The time this tenancy unit was created.
     */
    createTime?: string;
    /**
     * Globally unique identifier of this tenancy unit "services/{service}/{collection id}/{resource id}/tenancyUnits/{unit}"
     */
    name?: string;
    /**
     * Output only. Google Cloud API name of the managed service owning this tenancy unit. For example 'serviceconsumermanagement.googleapis.com'.
     */
    service?: string;
    /**
     * Resources constituting the tenancy unit. There can be at most 512 tenant resources in a tenancy unit.
     */
    tenantResources?: TenantResource[];
}
