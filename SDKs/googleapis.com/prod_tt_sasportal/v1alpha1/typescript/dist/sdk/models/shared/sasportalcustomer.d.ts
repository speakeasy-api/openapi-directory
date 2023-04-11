import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Entity representing a SAS customer.
 */
export declare class SasPortalCustomer extends SpeakeasyBase {
    /**
     * Required. Name of the organization that the customer entity represents.
     */
    displayName?: string;
    /**
     * Output only. Resource name of the customer.
     */
    name?: string;
    /**
     * User IDs used by the devices belonging to this customer.
     */
    sasUserIds?: string[];
}
