import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class TaskrouterV1WorkspaceWorkflow extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workflow resource.
     */
    accountSid?: string;
    /**
     * The URL that we call when a task managed by the Workflow is assigned to a Worker. See Assignment Callback URL for more information.
     */
    assignmentCallbackUrl?: string;
    /**
     * A JSON string that contains the Workflow's configuration. See [Configuring Workflows](https://www.twilio.com/docs/taskrouter/workflow-configuration) for more information.
     */
    configuration?: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The MIME type of the document.
     */
    documentContentType?: string;
    /**
     * The URL that we call when a call to the `assignment_callback_url` fails.
     */
    fallbackAssignmentCallbackUrl?: string;
    /**
     * The string that you assigned to describe the Workflow resource. For example, `Customer Support` or `2014 Election Campaign`.
     */
    friendlyName?: string;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * The unique string that we created to identify the Workflow resource.
     */
    sid?: string;
    /**
     * How long TaskRouter will wait for a confirmation response from your application after it assigns a Task to a Worker. Can be up to `86,400` (24 hours) and the default is `120`.
     */
    taskReservationTimeout?: number;
    /**
     * The absolute URL of the Workflow resource.
     */
    url?: string;
    /**
     * The SID of the Workspace that contains the Workflow.
     */
    workspaceSid?: string;
}
