import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single metadata entry.
 */
export declare class GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry extends SpeakeasyBase {
    /**
     * The metadata entry key. For JSON requests, the key is base64-encoded.
     */
    key?: string;
    /**
     * The metadata entry value. For JSON requests, the value is base64-encoded.
     */
    value?: string;
}
