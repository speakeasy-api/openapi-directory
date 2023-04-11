import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChineseNameGenderCandidatesSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ChineseNameGenderCandidatesRequest extends SpeakeasyBase {
    chineseGivenNameLatin: string;
    chineseSurnameLatin: string;
    knownGender: string;
}
export declare class ChineseNameGenderCandidatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A romanized name.
     */
    nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
