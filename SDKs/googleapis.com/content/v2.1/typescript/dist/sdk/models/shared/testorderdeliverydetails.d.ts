import { SpeakeasyBase } from "../../../internal/utils";
import { TestOrderAddress } from "./testorderaddress";
export declare class TestOrderDeliveryDetails extends SpeakeasyBase {
    address?: TestOrderAddress;
    /**
     * Whether the order is scheduled delivery order.
     */
    isScheduledDelivery?: boolean;
    /**
     * The phone number of the person receiving the delivery.
     */
    phoneNumber?: string;
}
