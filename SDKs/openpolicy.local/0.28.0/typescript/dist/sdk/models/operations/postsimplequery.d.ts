import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSimpleQueryRequest extends SpeakeasyBase {
    /**
     * The text of the input document (in JSON format)
     */
    requestBody: Record<string, any>;
    /**
     * If true, response will be in a human-readable format.
     */
    pretty?: boolean;
}
export declare class PostSimpleQueryResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    fourHundred?: shared.FourHundred;
    /**
     * Not found (for example, a requested policy module or document does not exist)
     */
    fourHundredAndFour?: shared.FourHundredAndFour;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
