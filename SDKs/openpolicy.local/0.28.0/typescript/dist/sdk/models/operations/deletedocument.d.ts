import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteDocumentRequest extends SpeakeasyBase {
    /**
     * A backslash (/) delimited path to access values inside object and array documents. If the path points to an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, the server will respond with 404.
     */
    path: string;
}
export declare class DeleteDocumentResponse extends SpeakeasyBase {
    /**
     * Server error
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
