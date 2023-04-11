import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Pubsub snapshot.
 */
export declare class PubsubSnapshotMetadata extends SpeakeasyBase {
    /**
     * The expire time of the Pubsub snapshot.
     */
    expireTime?: string;
    /**
     * The name of the Pubsub snapshot.
     */
    snapshotName?: string;
    /**
     * The name of the Pubsub topic.
     */
    topicName?: string;
}
