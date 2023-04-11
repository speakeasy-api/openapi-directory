import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of training to use to train the project (default: Regular).
 */
export declare enum TrainProjectTrainingTypeEnum {
    Regular = "Regular",
    Advanced = "Advanced"
}
export declare class TrainProjectRequest extends SpeakeasyBase {
    /**
     * API key.
     */
    trainingKey: string;
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
    trainingType?: TrainProjectTrainingTypeEnum;
}
export declare class TrainProjectResponse extends SpeakeasyBase {
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
