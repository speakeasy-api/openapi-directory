import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateTaskChannelServerList: readonly ["https://taskrouter.twilio.com"];
export declare class UpdateTaskChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateTaskChannelUpdateTaskChannelRequest extends SpeakeasyBase {
    /**
     * Whether the TaskChannel should prioritize Workers that have been idle. If `true`, Workers that have been idle the longest are prioritized.
     */
    channelOptimizedRouting?: boolean;
    /**
     * A descriptive string that you create to describe the Task Channel. It can be up to 64 characters long.
     */
    friendlyName?: string;
}
export declare class UpdateTaskChannelRequest extends SpeakeasyBase {
    requestBody?: UpdateTaskChannelUpdateTaskChannelRequest;
    /**
     * The SID of the Task Channel resource to update.
     */
    sid: string;
    /**
     * The SID of the Workspace with the Task Channel to update.
     */
    workspaceSid: string;
}
export declare class UpdateTaskChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceTaskChannel?: shared.TaskrouterV1WorkspaceTaskChannel;
}
