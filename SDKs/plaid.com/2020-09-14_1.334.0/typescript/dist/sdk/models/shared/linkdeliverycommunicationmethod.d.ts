import { SpeakeasyBase } from "../../../internal/utils";
import { LinkDeliveryDeliveryMethodEnum } from "./linkdeliverydeliverymethodenum";
/**
 * The communication method containing both the type and address to send the URL.
 */
export declare class LinkDeliveryCommunicationMethod extends SpeakeasyBase {
    /**
     * The address to deliver the Link Delivery URL
     */
    address?: string;
    /**
     * The delivery method to be used to deliver the Link Delivery URL.
     *
     * @remarks
     *
     * `SMS`: The URL will be delivered through SMS
     *
     * `EMAIL`: The URL will be delivered through email
     */
    method?: LinkDeliveryDeliveryMethodEnum;
}
