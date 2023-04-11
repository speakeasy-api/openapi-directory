import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTrainedModelMetrics1Security extends SpeakeasyBase {
    bearerToken: string;
}
export declare class GetTrainedModelMetrics1Request extends SpeakeasyBase {
    modelId: string;
}
export declare class GetTrainedModelMetrics1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Model Metrics
     */
    metrics?: shared.Metrics;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
