import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChineseNameMatchBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ChineseNameMatchBatchResponse extends SpeakeasyBase {
    /**
     * A list of genderized names.
     */
    batchNameMatchedOut?: shared.BatchNameMatchedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
