import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JapaneseNameKanjiCandidatesSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class JapaneseNameKanjiCandidatesRequest extends SpeakeasyBase {
    japaneseGivenNameLatin: string;
    japaneseSurnameLatin: string;
}
export declare class JapaneseNameKanjiCandidatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A romanized name.
     */
    nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
