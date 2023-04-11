import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchAccountSettingsServerList: readonly ["https://insights.twilio.com"];
export declare class FetchAccountSettingsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchAccountSettingsRequest extends SpeakeasyBase {
    subaccountSid?: string;
}
export declare class FetchAccountSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    insightsV1AccountSettings?: shared.InsightsV1AccountSettings;
}
