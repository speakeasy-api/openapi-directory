import { SpeakeasyBase } from "../../../internal/utils";
import { ImageMetadata } from "./imagemetadata";
/**
 * Result of image analysis using a specific domain model including additional metadata.
 */
export declare class DomainModelResults extends SpeakeasyBase {
    /**
     * Image metadata.
     */
    metadata?: ImageMetadata;
    /**
     * Id of the REST API request.
     */
    requestId?: string;
    /**
     * Model-specific response.
     */
    result?: Record<string, any>;
}
