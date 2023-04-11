import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenderChineseNamePinyinSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GenderChineseNamePinyinRequest extends SpeakeasyBase {
    chineseGivenNameLatin: string;
    chineseSurnameLatin: string;
}
export declare class GenderChineseNamePinyinResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A genderized name.
     */
    firstLastNameGenderedOut?: shared.FirstLastNameGenderedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
