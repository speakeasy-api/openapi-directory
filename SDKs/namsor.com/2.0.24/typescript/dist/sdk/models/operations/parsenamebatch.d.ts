import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ParseNameBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ParseNameBatchResponse extends SpeakeasyBase {
    /**
     * A list of parsed names.
     */
    batchPersonalNameParsedOut?: shared.BatchPersonalNameParsedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
