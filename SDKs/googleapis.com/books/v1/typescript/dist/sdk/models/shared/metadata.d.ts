import { SpeakeasyBase } from "../../../internal/utils";
export declare class MetadataItems extends SpeakeasyBase {
    downloadUrl?: string;
    encryptedKey?: string;
    language?: string;
    size?: string;
    version?: string;
}
/**
 * Successful response
 */
export declare class Metadata extends SpeakeasyBase {
    /**
     * A list of offline dictionary metadata.
     */
    items?: MetadataItems[];
    /**
     * Resource type.
     */
    kind?: string;
}
