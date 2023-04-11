import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ParseChineseNameSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ParseChineseNameRequest extends SpeakeasyBase {
    chineseName: string;
}
export declare class ParseChineseNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A origined name.
     */
    personalNameParsedOut?: shared.PersonalNameParsedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
