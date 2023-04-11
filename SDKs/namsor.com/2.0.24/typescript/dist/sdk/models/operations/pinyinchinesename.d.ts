import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PinyinChineseNameSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class PinyinChineseNameRequest extends SpeakeasyBase {
    chineseName: string;
}
export declare class PinyinChineseNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A pinyin name.
     */
    personalNameParsedOut?: shared.PersonalNameParsedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
