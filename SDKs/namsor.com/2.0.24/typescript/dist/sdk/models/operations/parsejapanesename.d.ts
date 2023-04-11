import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ParseJapaneseNameSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ParseJapaneseNameRequest extends SpeakeasyBase {
    japaneseName: string;
}
export declare class ParseJapaneseNameResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A origined name.
     */
    personalNameParsedOut?: shared.PersonalNameParsedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
