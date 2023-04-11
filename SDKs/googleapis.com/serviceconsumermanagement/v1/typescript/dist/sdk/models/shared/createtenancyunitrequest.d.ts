import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to create a tenancy unit for a service consumer of a managed service.
 */
export declare class CreateTenancyUnitRequest extends SpeakeasyBase {
    /**
     * Optional. Optional service producer-provided identifier of the tenancy unit. Must be no longer than 40 characters and preferably URI friendly. If it isn't provided, a UID for the tenancy unit is automatically generated. The identifier must be unique across a managed service. If the tenancy unit already exists for the managed service and service consumer pair, calling `CreateTenancyUnit` returns the existing tenancy unit if the provided identifier is identical or empty, otherwise the call fails.
     */
    tenancyUnitId?: string;
}
