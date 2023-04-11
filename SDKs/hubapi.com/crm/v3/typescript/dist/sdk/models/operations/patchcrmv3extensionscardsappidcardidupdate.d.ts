import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest extends SpeakeasyBase {
    /**
     * Card definition fields to be updated.
     */
    cardPatchRequest: shared.CardPatchRequest;
    /**
     * The ID of the target app.
     */
    appId: number;
    /**
     * The ID of the card to update.
     */
    cardId: string;
}
export declare class PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    /**
     * successful operation
     */
    cardResponse?: shared.CardResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
