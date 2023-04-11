import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an organization that can access a custom app.
 */
export declare class Organization extends SpeakeasyBase {
    /**
     * Required. ID of the organization.
     */
    organizationId?: string;
    /**
     * Optional. A human-readable name of the organization, to help recognize the organization.
     */
    organizationName?: string;
}
