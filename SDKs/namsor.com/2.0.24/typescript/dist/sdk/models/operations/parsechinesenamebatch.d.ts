import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ParseChineseNameBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ParseChineseNameBatchResponse extends SpeakeasyBase {
    /**
     * A list of parsed names.
     */
    batchPersonalNameParsedOut?: shared.BatchPersonalNameParsedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
