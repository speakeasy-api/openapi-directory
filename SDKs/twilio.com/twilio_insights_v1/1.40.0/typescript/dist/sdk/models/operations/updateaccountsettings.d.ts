import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateAccountSettingsServerList: readonly ["https://insights.twilio.com"];
export declare class UpdateAccountSettingsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateAccountSettingsUpdateAccountSettingsRequest extends SpeakeasyBase {
    advancedFeatures?: boolean;
    subaccountSid?: string;
    voiceTrace?: boolean;
}
export declare class UpdateAccountSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    insightsV1AccountSettings?: shared.InsightsV1AccountSettings;
}
