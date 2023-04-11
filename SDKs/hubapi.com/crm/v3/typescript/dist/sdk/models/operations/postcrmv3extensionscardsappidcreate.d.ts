import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCrmV3ExtensionsCardsAppIdCreateSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class PostCrmV3ExtensionsCardsAppIdCreateRequest extends SpeakeasyBase {
    /**
     * The new card definition.
     */
    cardCreateRequest: shared.CardCreateRequest;
    /**
     * The ID of the target app.
     */
    appId: number;
}
export declare class PostCrmV3ExtensionsCardsAppIdCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * successful operation
     */
    cardResponse?: shared.CardResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
