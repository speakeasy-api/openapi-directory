import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JapaneseNameMatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class JapaneseNameMatchRequest extends SpeakeasyBase {
    japaneseGivenNameLatin: string;
    japaneseName: string;
    japaneseSurnameLatin: string;
}
export declare class JapaneseNameMatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A romanized name.
     */
    nameMatchedOut?: shared.NameMatchedOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
