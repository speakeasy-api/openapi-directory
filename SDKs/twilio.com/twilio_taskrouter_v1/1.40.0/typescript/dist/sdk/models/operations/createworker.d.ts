import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateWorkerServerList: readonly ["https://taskrouter.twilio.com"];
export declare class CreateWorkerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateWorkerCreateWorkerRequest extends SpeakeasyBase {
    /**
     * The SID of a valid Activity that will describe the new Worker's initial state. See [Activities](https://www.twilio.com/docs/taskrouter/api/activity) for more information. If not provided, the new Worker's initial state is the `default_activity_sid` configured on the Workspace.
     */
    activitySid?: string;
    /**
     * A valid JSON string that describes the new Worker. For example: `{ "email": "Bob@example.com", "phone": "+5095551234" }`. This data is passed to the `assignment_callback_url` when TaskRouter assigns a Task to the Worker. Defaults to {}.
     */
    attributes?: string;
    /**
     * A descriptive string that you create to describe the new Worker. It can be up to 64 characters long.
     */
    friendlyName: string;
}
export declare class CreateWorkerRequest extends SpeakeasyBase {
    requestBody?: CreateWorkerCreateWorkerRequest;
    /**
     * The SID of the Workspace that the new Worker belongs to.
     */
    workspaceSid: string;
}
export declare class CreateWorkerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    taskrouterV1WorkspaceWorker?: shared.TaskrouterV1WorkspaceWorker;
}
