import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Location information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.
 */
export declare class KeyRangeLocation extends SpeakeasyBase {
    /**
     * The name of the data disk where data for this range is stored. This name is local to the Google Cloud Platform project and uniquely identifies the disk within that project, for example "myproject-1014-104817-4c2-harness-0-disk-1".
     */
    dataDisk?: string;
    /**
     * The physical location of this range assignment to be used for streaming computation cross-worker message delivery.
     */
    deliveryEndpoint?: string;
    /**
     * DEPRECATED. The location of the persistent state for this range, as a persistent directory in the worker local filesystem.
     */
    deprecatedPersistentDirectory?: string;
    /**
     * The end (exclusive) of the key range.
     */
    end?: string;
    /**
     * The start (inclusive) of the key range.
     */
    start?: string;
}
