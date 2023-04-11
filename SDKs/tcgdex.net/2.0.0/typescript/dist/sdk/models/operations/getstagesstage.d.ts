import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStagesStageRequest extends SpeakeasyBase {
    stage: string;
}
export declare class GetStagesStageResponse extends SpeakeasyBase {
    /**
     * Get all the cards having the specified stage
     */
    cardResumes?: shared.CardResume[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
