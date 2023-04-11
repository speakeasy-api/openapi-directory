import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JapaneseNameLatinCandidatesSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class JapaneseNameLatinCandidatesRequest extends SpeakeasyBase {
    japaneseGivenNameKanji: string;
    japaneseSurnameKanji: string;
}
export declare class JapaneseNameLatinCandidatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A romanized name.
     */
    nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
