import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JapaneseNameMatchBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class JapaneseNameMatchBatchResponse extends SpeakeasyBase {
    /**
     * A list of matched names.
     */
    batchNameMatchedOut?: shared.BatchNameMatchedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
