import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies how APIs are allowed to communicate within the Service Perimeter.
 */
export declare class VpcAccessibleServices extends SpeakeasyBase {
    /**
     * The list of APIs usable within the Service Perimeter. Must be empty unless 'enable_restriction' is True. You can specify a list of individual services, as well as include the 'RESTRICTED-SERVICES' value, which automatically includes all of the services protected by the perimeter.
     */
    allowedServices?: string[];
    /**
     * Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowed_services'.
     */
    enableRestriction?: boolean;
}
