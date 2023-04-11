import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateScoreConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation error when creating the ScoreConfig
     */
    error?: shared.ErrorT;
    scoreConfigOutput?: shared.ScoreConfigOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
