import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ParseNameSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ParseNameRequest extends SpeakeasyBase {
    nameFull: string;
}
export declare class ParseNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A origined name.
     */
    personalNameParsedOut?: shared.PersonalNameParsedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
