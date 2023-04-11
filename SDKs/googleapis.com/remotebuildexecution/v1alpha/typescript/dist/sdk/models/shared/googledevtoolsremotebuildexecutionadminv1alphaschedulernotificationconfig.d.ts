import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines configurations for an instance's scheduler notifications, where a target Pub/Sub topic will be notified whenever a task (e.g. an action or reservation) completes on this instance.
 */
export declare class GoogleDevtoolsRemotebuildexecutionAdminV1alphaSchedulerNotificationConfig extends SpeakeasyBase {
    /**
     * The Pub/Sub topic resource name to issue notifications to. Note that the topic does not need to be owned by the same project as this instance. Format: `projects//topics/`.
     */
    topic?: string;
}
