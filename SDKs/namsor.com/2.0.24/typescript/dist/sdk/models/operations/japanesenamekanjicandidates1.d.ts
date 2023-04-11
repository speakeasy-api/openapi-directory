import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JapaneseNameKanjiCandidates1Security extends SpeakeasyBase {
    apiKey: string;
}
export declare class JapaneseNameKanjiCandidates1Request extends SpeakeasyBase {
    japaneseGivenNameLatin: string;
    japaneseSurnameLatin: string;
    knownGender: string;
}
export declare class JapaneseNameKanjiCandidates1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * A romanized name.
     */
    nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
