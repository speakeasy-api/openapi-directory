import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchBilling401ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchBilling403ApplicationJson extends SpeakeasyBase {
    detail?: string;
}
export declare class PatchBillingRequest extends SpeakeasyBase {
    request: shared.Billing;
}
export declare class PatchBillingResponse extends SpeakeasyBase {
    billing?: shared.Billing;
    contentType: string;
    statusCode: number;
    patchBilling401ApplicationJSONObject?: PatchBilling401ApplicationJson;
    patchBilling403ApplicationJSONObject?: PatchBilling403ApplicationJson;
}
