import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DisableCardSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DisableCardRequest extends SpeakeasyBase {
    /**
     * Unique ID for the desired Card.
     */
    cardId: string;
}
export declare class DisableCardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    disableCardResponse?: shared.DisableCardResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
