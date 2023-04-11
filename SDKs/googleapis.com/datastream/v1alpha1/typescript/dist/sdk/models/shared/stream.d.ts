import { SpeakeasyBase } from "../../../internal/utils";
import { BackfillAllStrategy } from "./backfillallstrategy";
import { DestinationConfig } from "./destinationconfig";
import { ErrorT } from "./error";
import { SourceConfig } from "./sourceconfig";
/**
 * The state of the stream.
 */
export declare enum StreamStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Created = "CREATED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Maintenance = "MAINTENANCE",
    Failed = "FAILED",
    FailedPermanently = "FAILED_PERMANENTLY",
    Starting = "STARTING",
    Draining = "DRAINING"
}
export declare class StreamInput extends SpeakeasyBase {
    /**
     * Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
     */
    backfillAll?: BackfillAllStrategy;
    /**
     * Backfill strategy to disable automatic backfill for the Stream's objects.
     */
    backfillNone?: Record<string, any>;
    /**
     * Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
     */
    customerManagedEncryptionKey?: string;
    /**
     * The configuration of the stream destination.
     */
    destinationConfig?: DestinationConfig;
    /**
     * Required. Display name.
     */
    displayName?: string;
    /**
     * Labels.
     */
    labels?: Record<string, string>;
    /**
     * The configuration of the stream source.
     */
    sourceConfig?: SourceConfig;
    /**
     * The state of the stream.
     */
    state?: StreamStateEnum;
}
export declare class Stream extends SpeakeasyBase {
    /**
     * Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
     */
    backfillAll?: BackfillAllStrategy;
    /**
     * Backfill strategy to disable automatic backfill for the Stream's objects.
     */
    backfillNone?: Record<string, any>;
    /**
     * Output only. The creation time of the stream.
     */
    createTime?: string;
    /**
     * Immutable. A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
     */
    customerManagedEncryptionKey?: string;
    /**
     * The configuration of the stream destination.
     */
    destinationConfig?: DestinationConfig;
    /**
     * Required. Display name.
     */
    displayName?: string;
    /**
     * Output only. Errors on the Stream.
     */
    errors?: ErrorT[];
    /**
     * Labels.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The stream's name.
     */
    name?: string;
    /**
     * The configuration of the stream source.
     */
    sourceConfig?: SourceConfig;
    /**
     * The state of the stream.
     */
    state?: StreamStateEnum;
    /**
     * Output only. The last update time of the stream.
     */
    updateTime?: string;
}
