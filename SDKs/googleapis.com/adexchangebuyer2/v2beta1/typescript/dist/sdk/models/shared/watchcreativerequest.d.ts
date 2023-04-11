import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request for watching changes to creative Status.
 */
export declare class WatchCreativeRequest extends SpeakeasyBase {
    /**
     * The Pub/Sub topic to publish notifications to. This topic must already exist and must give permission to ad-exchange-buyside-reports@google.com to write to the topic. This should be the full resource name in "projects/{project_id}/topics/{topic_id}" format.
     */
    topic?: string;
}
