import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateActivityServerList: readonly ["https://taskrouter.twilio.com"];
export declare class UpdateActivitySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateActivityUpdateActivityRequest extends SpeakeasyBase {
    /**
     * A descriptive string that you create to describe the Activity resource. It can be up to 64 characters long. These names are used to calculate and expose statistics about Workers, and provide visibility into the state of each Worker. Examples of friendly names include: `on-call`, `break`, and `email`.
     */
    friendlyName?: string;
}
export declare class UpdateActivityRequest extends SpeakeasyBase {
    requestBody?: UpdateActivityUpdateActivityRequest;
    /**
     * The SID of the Activity resource to update.
     */
    sid: string;
    /**
     * The SID of the Workspace with the Activity resources to update.
     */
    workspaceSid: string;
}
export declare class UpdateActivityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceActivity?: shared.TaskrouterV1WorkspaceActivity;
}
