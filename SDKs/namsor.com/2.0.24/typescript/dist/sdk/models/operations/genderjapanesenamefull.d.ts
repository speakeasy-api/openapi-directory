import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenderJapaneseNameFullSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GenderJapaneseNameFullRequest extends SpeakeasyBase {
    japaneseName: string;
}
export declare class GenderJapaneseNameFullResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A genderized name.
     */
    personalNameGenderedOut?: shared.PersonalNameGenderedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
