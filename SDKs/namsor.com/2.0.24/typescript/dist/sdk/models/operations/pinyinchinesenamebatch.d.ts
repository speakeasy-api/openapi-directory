import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PinyinChineseNameBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class PinyinChineseNameBatchResponse extends SpeakeasyBase {
    /**
     * A list of Pinyin names.
     */
    batchPersonalNameParsedOut?: shared.BatchPersonalNameParsedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
