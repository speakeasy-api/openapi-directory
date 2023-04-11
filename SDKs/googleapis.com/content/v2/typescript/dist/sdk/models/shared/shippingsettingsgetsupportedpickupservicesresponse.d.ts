import { SpeakeasyBase } from "../../../internal/utils";
import { PickupServicesPickupService } from "./pickupservicespickupservice";
/**
 * Successful response
 */
export declare class ShippingsettingsGetSupportedPickupServicesResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedPickupServicesResponse".
     */
    kind?: string;
    /**
     * A list of supported pickup services. May be empty.
     */
    pickupServices?: PickupServicesPickupService[];
}
