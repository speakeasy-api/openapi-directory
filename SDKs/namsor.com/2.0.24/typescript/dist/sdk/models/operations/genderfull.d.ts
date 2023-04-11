import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenderFullSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GenderFullRequest extends SpeakeasyBase {
    fullName: string;
}
export declare class GenderFullResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A genderized name.
     */
    personalNameGenderedOut?: shared.PersonalNameGenderedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
