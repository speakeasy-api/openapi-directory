import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudWebriskV1RawIndices } from "./googlecloudwebriskv1rawindices";
import { GoogleCloudWebriskV1RiceDeltaEncoding } from "./googlecloudwebriskv1ricedeltaencoding";
/**
 * Contains the set of entries to remove from a local database.
 */
export declare class GoogleCloudWebriskV1ThreatEntryRemovals extends SpeakeasyBase {
    /**
     * A set of raw indices to remove from a local list.
     */
    rawIndices?: GoogleCloudWebriskV1RawIndices;
    /**
     * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
     */
    riceIndices?: GoogleCloudWebriskV1RiceDeltaEncoding;
}
