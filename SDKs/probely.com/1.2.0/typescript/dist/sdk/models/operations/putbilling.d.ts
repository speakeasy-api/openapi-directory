import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutBilling401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutBilling403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PutBillingRequest extends SpeakeasyBase {
    request: shared.Billing;
}
export declare class PutBillingResponse extends SpeakeasyBase {
    billing?: shared.Billing;
    contentType: string;
    statusCode: number;
    putBilling401ApplicationJSONObject?: PutBilling401ApplicationJson;
    putBilling403ApplicationJSONObject?: PutBilling403ApplicationJson;
}
