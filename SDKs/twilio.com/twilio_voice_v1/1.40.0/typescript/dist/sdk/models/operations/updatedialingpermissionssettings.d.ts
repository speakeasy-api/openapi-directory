import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateDialingPermissionsSettingsServerList: readonly ["https://voice.twilio.com"];
export declare class UpdateDialingPermissionsSettingsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest extends SpeakeasyBase {
    /**
     * `true` for the sub-account to inherit voice dialing permissions from the Master Project; otherwise `false`.
     */
    dialingPermissionsInheritance?: boolean;
}
export declare class UpdateDialingPermissionsSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Accepted
     */
    voiceV1DialingPermissionsDialingPermissionsSettings?: shared.VoiceV1DialingPermissionsDialingPermissionsSettings;
}
