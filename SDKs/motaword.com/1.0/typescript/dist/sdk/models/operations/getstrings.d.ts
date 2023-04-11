import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStringsRequest extends SpeakeasyBase {
    /**
     * Requested page
     */
    page?: number;
    /**
     * Source Language Code
     */
    sourceLanguage?: string;
}
export declare class GetStringsResponse extends SpeakeasyBase {
    /**
     * List of strings in JSON
     */
    clientStrings?: shared.ClientStrings;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
