import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const FetchWirelessSimServerList: readonly ["https://preview.twilio.com"];
export declare class FetchWirelessSimPathParams extends SpeakeasyBase {
    sid: string;
}
export declare class FetchWirelessSimSecurity extends SpeakeasyBase {
    accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}
export declare class FetchWirelessSimRequest extends SpeakeasyBase {
    serverURL?: string;
    pathParams: FetchWirelessSimPathParams;
    security: FetchWirelessSimSecurity;
}
export declare class FetchWirelessSimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    previewWirelessSim?: shared.PreviewWirelessSim;
}
