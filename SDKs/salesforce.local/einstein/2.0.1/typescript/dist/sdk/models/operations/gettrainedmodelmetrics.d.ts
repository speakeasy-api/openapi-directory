import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTrainedModelMetricsSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class GetTrainedModelMetricsRequest extends SpeakeasyBase {
    /**
     * Model Id
     */
    modelId: string;
}
export declare class GetTrainedModelMetricsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Model Metrics
     */
    metrics?: shared.Metrics;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
