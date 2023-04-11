import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutDocumentRequest extends SpeakeasyBase {
    /**
     * The server will respect the If-None-Match header if it is set to * (in other words, it will not overwrite an existing document located at the specified `path`).
     */
    ifNoneMatch?: string;
    /**
     * The JSON document to write to the specified path.
     */
    requestBody: any;
    /**
     * A backslash (/) delimited path to access values inside object and array documents. If the path points to an array, the server will attempt to convert the array index to an integer. If the path element cannot be converted to an integer, the server will respond with 404.
     */
    path: string;
}
export declare class PutDocumentResponse extends SpeakeasyBase {
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
