import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GenderSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GenderRequest extends SpeakeasyBase {
    firstName: string;
}
export declare class GenderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A genderized name.
     */
    firstLastNameGenderedOut?: shared.FirstLastNameGenderedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
