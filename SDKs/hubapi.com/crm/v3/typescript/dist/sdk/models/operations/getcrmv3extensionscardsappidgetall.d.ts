import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCrmV3ExtensionsCardsAppIdGetAllSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class GetCrmV3ExtensionsCardsAppIdGetAllRequest extends SpeakeasyBase {
    /**
     * The ID of the target app.
     */
    appId: number;
}
export declare class GetCrmV3ExtensionsCardsAppIdGetAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * successful operation
     */
    cardListResponse?: shared.CardListResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
