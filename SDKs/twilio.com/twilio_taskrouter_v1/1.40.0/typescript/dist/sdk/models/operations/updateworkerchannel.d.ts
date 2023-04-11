import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateWorkerChannelServerList: readonly ["https://taskrouter.twilio.com"];
export declare class UpdateWorkerChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateWorkerChannelUpdateWorkerChannelRequest extends SpeakeasyBase {
    /**
     * Whether the WorkerChannel is available. Set to `false` to prevent the Worker from receiving any new Tasks of this TaskChannel type.
     */
    available?: boolean;
    /**
     * The total number of Tasks that the Worker should handle for the TaskChannel type. TaskRouter creates reservations for Tasks of this TaskChannel type up to the specified capacity. If the capacity is 0, no new reservations will be created.
     */
    capacity?: number;
}
export declare class UpdateWorkerChannelRequest extends SpeakeasyBase {
    requestBody?: UpdateWorkerChannelUpdateWorkerChannelRequest;
    /**
     * The SID of the WorkerChannel to update.
     */
    sid: string;
    /**
     * The SID of the Worker with the WorkerChannel to update.
     */
    workerSid: string;
    /**
     * The SID of the Workspace with the WorkerChannel to update.
     */
    workspaceSid: string;
}
export declare class UpdateWorkerChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceWorkerWorkerChannel?: shared.TaskrouterV1WorkspaceWorkerWorkerChannel;
}
