import { SpeakeasyBase } from "../../../internal/utils";
import { TestOrderAddress } from "./testorderaddress";
import { TestOrderPickupDetailsPickupPerson } from "./testorderpickupdetailspickupperson";
export declare class TestOrderPickupDetails extends SpeakeasyBase {
    /**
     * Required. Code of the location defined by provider or merchant.
     */
    locationCode?: string;
    pickupLocationAddress?: TestOrderAddress;
    /**
     * Pickup location type. Acceptable values are: - "`locker`" - "`store`" - "`curbside`"
     */
    pickupLocationType?: string;
    /**
     * Required. all pickup persons set by users.
     */
    pickupPersons?: TestOrderPickupDetailsPickupPerson[];
}
