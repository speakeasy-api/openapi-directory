import { SpeakeasyBase } from "../../../internal/utils";
import { ImageMetadata } from "./imagemetadata";
import { ImageTag } from "./imagetag";
/**
 * The results of a image tag operation, including any tags and image metadata.
 */
export declare class TagResult extends SpeakeasyBase {
    /**
     * Image metadata.
     */
    metadata?: ImageMetadata;
    /**
     * Id of the REST API request.
     */
    requestId?: string;
    /**
     * A list of tags with confidence level.
     */
    tags?: ImageTag[];
}
