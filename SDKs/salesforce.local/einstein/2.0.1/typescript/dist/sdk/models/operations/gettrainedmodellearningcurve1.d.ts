import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTrainedModelLearningCurve1Security extends SpeakeasyBase {
    bearerToken: string;
}
export declare class GetTrainedModelLearningCurve1Request extends SpeakeasyBase {
    /**
     * Number of epoch to return. Maximum valid value is 25.
     */
    count?: string;
    modelId: string;
    /**
     * Index of the epoch from which you want to start paging
     */
    offset?: string;
}
export declare class GetTrainedModelLearningCurve1Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Learning Curve
     */
    learningCurveList?: shared.LearningCurveList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
