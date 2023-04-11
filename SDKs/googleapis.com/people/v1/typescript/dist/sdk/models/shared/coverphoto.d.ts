import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
/**
 * A person's cover photo. A large image shown on the person's profile page that represents who they are or what they care about.
 */
export declare class CoverPhoto extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The URL of the cover photo.
     */
    url?: string;
}
