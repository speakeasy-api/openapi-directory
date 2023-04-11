import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudWebriskV1RawHashes } from "./googlecloudwebriskv1rawhashes";
import { GoogleCloudWebriskV1RiceDeltaEncoding } from "./googlecloudwebriskv1ricedeltaencoding";
/**
 * Contains the set of entries to add to a local database. May contain a combination of compressed and raw data in a single response.
 */
export declare class GoogleCloudWebriskV1ThreatEntryAdditions extends SpeakeasyBase {
    /**
     * The raw SHA256-formatted entries. Repeated to allow returning sets of hashes with different prefix sizes.
     */
    rawHashes?: GoogleCloudWebriskV1RawHashes[];
    /**
     * The Rice-Golomb encoded data. Used for sending compressed 4-byte hashes or compressed removal indices.
     */
    riceHashes?: GoogleCloudWebriskV1RiceDeltaEncoding;
}
