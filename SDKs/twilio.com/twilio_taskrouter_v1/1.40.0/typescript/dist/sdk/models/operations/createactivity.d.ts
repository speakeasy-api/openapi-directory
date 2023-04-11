import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateActivityServerList: readonly ["https://taskrouter.twilio.com"];
export declare class CreateActivitySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateActivityCreateActivityRequest extends SpeakeasyBase {
    /**
     * Whether the Worker should be eligible to receive a Task when it occupies the Activity. A value of `true`, `1`, or `yes` specifies the Activity is available. All other values specify that it is not. The value cannot be changed after the Activity is created.
     */
    available?: boolean;
    /**
     * A descriptive string that you create to describe the Activity resource. It can be up to 64 characters long. These names are used to calculate and expose statistics about Workers, and provide visibility into the state of each Worker. Examples of friendly names include: `on-call`, `break`, and `email`.
     */
    friendlyName: string;
}
export declare class CreateActivityRequest extends SpeakeasyBase {
    requestBody?: CreateActivityCreateActivityRequest;
    /**
     * The SID of the Workspace that the new Activity belongs to.
     */
    workspaceSid: string;
}
export declare class CreateActivityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    taskrouterV1WorkspaceActivity?: shared.TaskrouterV1WorkspaceActivity;
}
