import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWebhooksV3AppIdSettingsGetAllSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class GetWebhooksV3AppIdSettingsGetAllRequest extends SpeakeasyBase {
    appId: number;
}
export declare class GetWebhooksV3AppIdSettingsGetAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    settingsResponse?: shared.SettingsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
