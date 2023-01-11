import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostBillingEstimate400ApplicationJson extends SpeakeasyBase {
    lessThanFieldNameGreaterThan?: string[];
    nonFieldErrors?: string[];
}
export declare class PostBillingEstimate401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostBillingEstimate403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PostBillingEstimateRequest extends SpeakeasyBase {
    request: shared.SubscriptionInput;
}
export declare class PostBillingEstimateResponse extends SpeakeasyBase {
    contentType: string;
    invoice?: shared.Invoice;
    statusCode: number;
    postBillingEstimate400ApplicationJSONObject?: PostBillingEstimate400ApplicationJson;
    postBillingEstimate401ApplicationJSONObject?: PostBillingEstimate401ApplicationJson;
    postBillingEstimate403ApplicationJSONObject?: PostBillingEstimate403ApplicationJson;
}
