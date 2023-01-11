import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TrainProjectPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare enum TrainProjectTrainingTypeEnum {
    Regular = "Regular",
    Advanced = "Advanced"
}
export declare class TrainProjectQueryParams extends SpeakeasyBase {
    forceTrain?: boolean;
    notificationEmailAddress?: string;
    reservedBudgetInHours?: number;
    trainingType?: TrainProjectTrainingTypeEnum;
}
export declare class TrainProjectHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class TrainProjectRequest extends SpeakeasyBase {
    pathParams: TrainProjectPathParams;
    queryParams: TrainProjectQueryParams;
    headers: TrainProjectHeaders;
}
export declare class TrainProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    iteration?: shared.Iteration;
    statusCode: number;
}
