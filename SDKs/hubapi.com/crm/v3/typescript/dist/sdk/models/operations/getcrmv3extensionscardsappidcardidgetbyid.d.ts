import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest extends SpeakeasyBase {
    /**
     * The ID of the target app.
     */
    appId: number;
    /**
     * The ID of the target card.
     */
    cardId: string;
}
export declare class GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * successful operation
     */
    cardResponse?: shared.CardResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
