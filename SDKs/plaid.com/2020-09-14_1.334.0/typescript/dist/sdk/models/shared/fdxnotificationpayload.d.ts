import { SpeakeasyBase } from "../../../internal/utils";
import { FDXFiAttribute } from "./fdxfiattribute";
import { FDXNotificationPayloadIdTypeEnum } from "./fdxnotificationpayloadidtypeenum";
/**
 * Custom key-value pairs payload for a notification
 */
export declare class FDXNotificationPayload extends SpeakeasyBase {
    /**
     * Financial Institution provider-specific attribute
     */
    customFields?: FDXFiAttribute;
    /**
     * ID for the origination entity related to the notification
     */
    id?: string;
    /**
     * Type of entity causing origination of a notification
     */
    idType?: FDXNotificationPayloadIdTypeEnum;
}
