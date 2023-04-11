import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity extends SpeakeasyBase {
    developerHapikey: string;
}
export declare class DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest extends SpeakeasyBase {
    /**
     * The ID of the target app.
     */
    appId: number;
    /**
     * The ID of the card to delete.
     */
    cardId: string;
}
export declare class DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
