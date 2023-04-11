import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenderChineseNameSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GenderChineseNameRequest extends SpeakeasyBase {
    chineseName: string;
}
export declare class GenderChineseNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A genderized name.
     */
    personalNameGenderedOut?: shared.PersonalNameGenderedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
