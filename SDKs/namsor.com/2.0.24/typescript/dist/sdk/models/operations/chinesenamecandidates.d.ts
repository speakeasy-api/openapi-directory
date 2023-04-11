import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChineseNameCandidatesSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ChineseNameCandidatesRequest extends SpeakeasyBase {
    chineseGivenNameLatin: string;
    chineseSurnameLatin: string;
}
export declare class ChineseNameCandidatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A romanized name.
     */
    nameMatchCandidatesOut?: shared.NameMatchCandidatesOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
