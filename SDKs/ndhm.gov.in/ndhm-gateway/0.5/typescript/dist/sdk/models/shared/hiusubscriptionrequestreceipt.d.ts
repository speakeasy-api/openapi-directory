import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { RequestReference } from "./requestreference";
export declare class HIUSubscriptionRequestReceiptSubscriptionRequest extends SpeakeasyBase {
    /**
     * id of the consent-request created
     */
    id: string;
}
export declare class HIUSubscriptionRequestReceipt extends SpeakeasyBase {
    error?: ErrorT;
    /**
     * a nonce, unique for each HTTP request
     */
    requestId: string;
    resp: RequestReference;
    subscriptionRequest?: HIUSubscriptionRequestReceiptSubscriptionRequest;
    /**
     * Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ
     */
    timestamp: Date;
}
