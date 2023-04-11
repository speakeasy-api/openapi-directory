import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChineseNameCandidatesBatchSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class ChineseNameCandidatesBatchResponse extends SpeakeasyBase {
    /**
     * A list of genderized names.
     */
    batchNameMatchCandidatesOut?: shared.BatchNameMatchCandidatesOut;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
