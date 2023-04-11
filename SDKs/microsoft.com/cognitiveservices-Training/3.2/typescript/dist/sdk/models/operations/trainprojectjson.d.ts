import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of training to use to train the project (default: Regular).
 */
export declare enum TrainProjectJsonTrainingTypeEnum {
    Regular = "Regular",
    Advanced = "Advanced"
}
export declare class TrainProjectJsonRequest extends SpeakeasyBase {
    /**
     * Additional training parameters passed in to control how the project is trained.
     */
    trainingParameters?: shared.TrainingParameters;
    /**
     * Whether to force train even if dataset and configuration does not change (default: false).
     */
    forceTrain?: boolean;
    /**
     * The email address to send notification to when training finishes (default: null).
     */
    notificationEmailAddress?: string;
    /**
     * The project id.
     */
    projectId: string;
    /**
     * The number of hours reserved as budget for training (if applicable).
     */
    reservedBudgetInHours?: number;
    /**
     * The type of training to use to train the project (default: Regular).
     */
    trainingType?: TrainProjectJsonTrainingTypeEnum;
}
export declare class TrainProjectJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    iteration?: shared.Iteration;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
