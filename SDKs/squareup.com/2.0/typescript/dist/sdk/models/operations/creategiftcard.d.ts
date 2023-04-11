import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateGiftCardSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateGiftCardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createGiftCardResponse?: shared.CreateGiftCardResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
