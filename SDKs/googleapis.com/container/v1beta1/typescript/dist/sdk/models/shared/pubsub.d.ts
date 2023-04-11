import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
/**
 * Pub/Sub specific notification config.
 */
export declare class PubSub extends SpeakeasyBase {
    /**
     * Enable notifications for Pub/Sub.
     */
    enabled?: boolean;
    /**
     * Allows filtering to one or more specific event types. If event types are present, those and only those event types will be transmitted to the cluster. Other types will be skipped. If no filter is specified, or no event types are present, all event types will be sent
     */
    filter?: Filter;
    /**
     * The desired Pub/Sub topic to which notifications will be sent by GKE. Format is `projects/{project}/topics/{topic}`.
     */
    topic?: string;
}
