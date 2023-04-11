import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTrainedModelLearningCurveSecurity extends SpeakeasyBase {
    bearerToken: string;
}
export declare class GetTrainedModelLearningCurveRequest extends SpeakeasyBase {
    /**
     * Number of epoch to return. Maximum valid value is 25.
     */
    count?: string;
    /**
     * Model Id
     */
    modelId: string;
    /**
     * Index of the epoch from which you want to start paging
     */
    offset?: string;
}
export declare class GetTrainedModelLearningCurveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Learning Curve
     */
    learningCurveList?: shared.LearningCurveList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
