import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2ActivitiesJsonRequestBody extends SpeakeasyBase {
    /**
     * Action that is being completed. This will validate that the action is still
     *
     * @remarks
     * valid before completed it. The same action can never be successfully passed twice to this endpoint.
     * The action must have a type of 'integration'.
     *
     */
    actionId?: number;
    /**
     * Task that is being completed. This will validate that the task is still
     *
     * @remarks
     * valid before completed it. The same action can never be successfully passed twice to this endpoint.
     * The task must have a type of 'integration'.
     *
     */
    taskId?: number;
}
export declare class PostV2ActivitiesJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
