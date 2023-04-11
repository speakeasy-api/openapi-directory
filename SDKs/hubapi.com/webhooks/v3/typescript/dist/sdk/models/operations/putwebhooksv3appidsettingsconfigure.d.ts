import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutWebhooksV3AppIdSettingsConfigureSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class PutWebhooksV3AppIdSettingsConfigureRequest extends SpeakeasyBase {
    settingsChangeRequest: shared.SettingsChangeRequest;
    appId: number;
}
export declare class PutWebhooksV3AppIdSettingsConfigureResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * successful operation
     */
    settingsResponse?: shared.SettingsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
