import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiOembedRequest extends SpeakeasyBase {
    /**
     * height of the iframe. Defaults to null
     */
    maxheight?: number;
    /**
     * width of the iframe. Defaults to 400
     */
    maxwidth?: number;
    /**
     * URL of a status
     */
    url?: string;
}
export declare class GetApiOembedResponse extends SpeakeasyBase {
    /**
     * Success
     */
    card?: shared.Card;
    contentType: string;
    /**
     * Not Found
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
