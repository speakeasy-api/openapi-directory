import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenderJapaneseNamePinyinBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GenderJapaneseNamePinyinBatchResponse extends SpeakeasyBase {
    /**
     * A list of genderized names.
     */
    batchFirstLastNameGenderedOut?: shared.BatchFirstLastNameGenderedOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
