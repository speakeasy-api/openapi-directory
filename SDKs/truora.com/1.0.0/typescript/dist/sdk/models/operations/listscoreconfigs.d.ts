import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListScoreConfigsRequest extends SpeakeasyBase {
    /**
     * The key to start the pagination
     */
    startKey?: string;
}
export declare class ListScoreConfigsResponse extends SpeakeasyBase {
    contentType: string;
    scoreConfigsOutput?: shared.ScoreConfigsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
