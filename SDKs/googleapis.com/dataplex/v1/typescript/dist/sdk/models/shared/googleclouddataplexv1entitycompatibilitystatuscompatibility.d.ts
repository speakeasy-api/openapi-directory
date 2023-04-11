import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides compatibility information for a specific metadata store.
 */
export declare class GoogleCloudDataplexV1EntityCompatibilityStatusCompatibility extends SpeakeasyBase {
    /**
     * Output only. Whether the entity is compatible and can be represented in the metadata store.
     */
    compatible?: boolean;
    /**
     * Output only. Provides additional detail if the entity is incompatible with the metadata store.
     */
    reason?: string;
}
