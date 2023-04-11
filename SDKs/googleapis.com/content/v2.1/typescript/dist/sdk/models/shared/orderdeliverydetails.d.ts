import { SpeakeasyBase } from "../../../internal/utils";
import { OrderAddress } from "./orderaddress";
export declare class OrderDeliveryDetails extends SpeakeasyBase {
    address?: OrderAddress;
    /**
     * The phone number of the person receiving the delivery.
     */
    phoneNumber?: string;
}
