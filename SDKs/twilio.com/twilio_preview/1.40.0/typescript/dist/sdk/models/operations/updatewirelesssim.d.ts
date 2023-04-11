import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateWirelessSimServerList: readonly ["https://preview.twilio.com"];
export declare class UpdateWirelessSimSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare enum UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare enum UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateWirelessSimUpdateWirelessSimRequest extends SpeakeasyBase {
    callbackMethod?: string;
    callbackUrl?: string;
    commandsCallbackMethod?: UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum;
    commandsCallbackUrl?: string;
    friendlyName?: string;
    ratePlan?: string;
    smsFallbackMethod?: UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum;
    smsFallbackUrl?: string;
    smsMethod?: UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum;
    smsUrl?: string;
    status?: string;
    uniqueName?: string;
    voiceFallbackMethod?: UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum;
    voiceFallbackUrl?: string;
    voiceMethod?: UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum;
    voiceUrl?: string;
}
export declare class UpdateWirelessSimRequest extends SpeakeasyBase {
    requestBody?: UpdateWirelessSimUpdateWirelessSimRequest;
    sid: string;
}
export declare class UpdateWirelessSimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    previewWirelessSim?: shared.PreviewWirelessSim;
}
