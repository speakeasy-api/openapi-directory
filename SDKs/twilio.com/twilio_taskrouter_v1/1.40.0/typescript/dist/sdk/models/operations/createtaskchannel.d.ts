import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateTaskChannelServerList: readonly ["https://taskrouter.twilio.com"];
export declare class CreateTaskChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateTaskChannelCreateTaskChannelRequest extends SpeakeasyBase {
    /**
     * Whether the Task Channel should prioritize Workers that have been idle. If `true`, Workers that have been idle the longest are prioritized.
     */
    channelOptimizedRouting?: boolean;
    /**
     * A descriptive string that you create to describe the Task Channel. It can be up to 64 characters long.
     */
    friendlyName: string;
    /**
     * An application-defined string that uniquely identifies the Task Channel, such as `voice` or `sms`.
     */
    uniqueName: string;
}
export declare class CreateTaskChannelRequest extends SpeakeasyBase {
    requestBody?: CreateTaskChannelCreateTaskChannelRequest;
    /**
     * The SID of the Workspace that the new Task Channel belongs to.
     */
    workspaceSid: string;
}
export declare class CreateTaskChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    taskrouterV1WorkspaceTaskChannel?: shared.TaskrouterV1WorkspaceTaskChannel;
}
