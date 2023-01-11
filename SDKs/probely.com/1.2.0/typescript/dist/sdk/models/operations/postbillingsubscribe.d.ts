import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostBillingSubscribe400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostBillingSubscribe401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostBillingSubscribe403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostBillingSubscribeRequest extends SpeakeasyBase {
    request: shared.SubscriptionInput;
}
export declare class PostBillingSubscribeResponse extends SpeakeasyBase {
    contentType: string;
    invoice?: shared.Invoice;
    statusCode: number;
    postBillingSubscribe400ApplicationJSONObject?: PostBillingSubscribe400ApplicationJson;
    postBillingSubscribe401ApplicationJSONObject?: PostBillingSubscribe401ApplicationJson;
    postBillingSubscribe403ApplicationJSONObject?: PostBillingSubscribe403ApplicationJson;
}
