import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV1ContinuousChecksContinuousCheckIdHistorySecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetV1ContinuousChecksContinuousCheckIdHistoryRequest extends SpeakeasyBase {
    continuousCheckId: string;
}
export declare class GetV1ContinuousChecksContinuousCheckIdHistoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ok
     */
    getContiuousCheckHistoryOutput?: shared.GetContiuousCheckHistoryOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
