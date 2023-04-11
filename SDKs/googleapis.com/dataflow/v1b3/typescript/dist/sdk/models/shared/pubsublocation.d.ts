import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job.
 */
export declare class PubsubLocation extends SpeakeasyBase {
    /**
     * Indicates whether the pipeline allows late-arriving data.
     */
    dropLateData?: boolean;
    /**
     * If set, contains a pubsub label from which to extract record ids. If left empty, record deduplication will be strictly best effort.
     */
    idLabel?: string;
    /**
     * A pubsub subscription, in the form of "pubsub.googleapis.com/subscriptions//"
     */
    subscription?: string;
    /**
     * If set, contains a pubsub label from which to extract record timestamps. If left empty, record timestamps will be generated upon arrival.
     */
    timestampLabel?: string;
    /**
     * A pubsub topic, in the form of "pubsub.googleapis.com/topics//"
     */
    topic?: string;
    /**
     * If set, specifies the pubsub subscription that will be used for tracking custom time timestamps for watermark estimation.
     */
    trackingSubscription?: string;
    /**
     * If true, then the client has requested to get pubsub attributes.
     */
    withAttributes?: boolean;
}
