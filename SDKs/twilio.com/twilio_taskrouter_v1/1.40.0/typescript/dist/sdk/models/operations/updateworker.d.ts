import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateWorkerServerList: readonly ["https://taskrouter.twilio.com"];
export declare class UpdateWorkerSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateWorkerUpdateWorkerRequest extends SpeakeasyBase {
    /**
     * The SID of a valid Activity that will describe the Worker's initial state. See [Activities](https://www.twilio.com/docs/taskrouter/api/activity) for more information.
     */
    activitySid?: string;
    /**
     * The JSON string that describes the Worker. For example: `{ "email": "Bob@example.com", "phone": "+5095551234" }`. This data is passed to the `assignment_callback_url` when TaskRouter assigns a Task to the Worker. Defaults to {}.
     */
    attributes?: string;
    /**
     * A descriptive string that you create to describe the Worker. It can be up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * Whether to reject the Worker's pending reservations. This option is only valid if the Worker's new [Activity](https://www.twilio.com/docs/taskrouter/api/activity) resource has its `availability` property set to `False`.
     */
    rejectPendingReservations?: boolean;
}
export declare class UpdateWorkerRequest extends SpeakeasyBase {
    /**
     * The If-Match HTTP request header
     */
    ifMatch?: string;
    requestBody?: UpdateWorkerUpdateWorkerRequest;
    /**
     * The SID of the Worker resource to update.
     */
    sid: string;
    /**
     * The SID of the Workspace with the Worker to update.
     */
    workspaceSid: string;
}
export declare class UpdateWorkerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    taskrouterV1WorkspaceWorker?: shared.TaskrouterV1WorkspaceWorker;
}
