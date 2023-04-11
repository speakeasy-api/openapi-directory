import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenderChineseNamePinyinBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GenderChineseNamePinyinBatchResponse extends SpeakeasyBase {
    /**
     * A list of genderized names.
     */
    batchFirstLastNameGenderedOut?: shared.BatchFirstLastNameGenderedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
