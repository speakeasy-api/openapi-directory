import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSuffixesSuffixRequest extends SpeakeasyBase {
    suffix: string;
}
export declare class GetSuffixesSuffixResponse extends SpeakeasyBase {
    /**
     * Get all the cards having the specified stage suffix
     */
    cardResumes?: shared.CardResume[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
