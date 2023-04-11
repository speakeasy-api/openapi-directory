import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenderJapaneseNamePinyinSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GenderJapaneseNamePinyinRequest extends SpeakeasyBase {
    japaneseGivenName: string;
    japaneseSurname: string;
}
export declare class GenderJapaneseNamePinyinResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A genderized name.
     */
    firstLastNameGenderedOut?: shared.FirstLastNameGenderedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
