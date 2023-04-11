import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * The content type of the biography.
 */
export declare enum BiographyContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED",
    TextPlain = "TEXT_PLAIN",
    TextHtml = "TEXT_HTML"
}
/**
 * A person's short biography.
 */
export declare class Biography extends SpeakeasyBase {
    /**
     * The content type of the biography.
     */
    contentType?: BiographyContentTypeEnum;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The short biography.
     */
    value?: string;
}
/**
 * A person's short biography.
 */
export declare class BiographyInput extends SpeakeasyBase {
    /**
     * The content type of the biography.
     */
    contentType?: BiographyContentTypeEnum;
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The short biography.
     */
    value?: string;
}
