import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteWebhooksV3AppIdSettingsClearSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class DeleteWebhooksV3AppIdSettingsClearRequest extends SpeakeasyBase {
    appId: number;
}
export declare class DeleteWebhooksV3AppIdSettingsClearResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
