import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Gender1Security extends SpeakeasyBase {
    apiKey: string;
}
export declare class Gender1Request extends SpeakeasyBase {
    firstName: string;
    lastName: string;
}
export declare class Gender1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * A genderized name.
     */
    firstLastNameGenderedOut?: shared.FirstLastNameGenderedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
