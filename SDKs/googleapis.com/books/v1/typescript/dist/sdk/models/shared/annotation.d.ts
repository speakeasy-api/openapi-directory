import { SpeakeasyBase } from "../../../internal/utils";
import { BooksAnnotationsRange } from "./booksannotationsrange";
/**
 * Selection ranges sent from the client.
 */
export declare class AnnotationClientVersionRanges extends SpeakeasyBase {
    cfiRange?: BooksAnnotationsRange;
    /**
     * Content version the client sent in.
     */
    contentVersion?: string;
    gbImageRange?: BooksAnnotationsRange;
    gbTextRange?: BooksAnnotationsRange;
    imageCfiRange?: BooksAnnotationsRange;
}
/**
 * Selection ranges for the most recent content version.
 */
export declare class AnnotationCurrentVersionRanges extends SpeakeasyBase {
    cfiRange?: BooksAnnotationsRange;
    /**
     * Content version applicable to ranges below.
     */
    contentVersion?: string;
    gbImageRange?: BooksAnnotationsRange;
    gbTextRange?: BooksAnnotationsRange;
    imageCfiRange?: BooksAnnotationsRange;
}
export declare class AnnotationLayerSummary extends SpeakeasyBase {
    /**
     * Maximum allowed characters on this layer, especially for the "copy" layer.
     */
    allowedCharacterCount?: number;
    /**
     * Type of limitation on this layer. "limited" or "unlimited" for the "copy" layer.
     */
    limitType?: string;
    /**
     * Remaining allowed characters on this layer, especially for the "copy" layer.
     */
    remainingCharacterCount?: number;
}
/**
 * Successful response
 */
export declare class Annotation extends SpeakeasyBase {
    /**
     * Anchor text after excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.
     */
    afterSelectedText?: string;
    /**
     * Anchor text before excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty.
     */
    beforeSelectedText?: string;
    /**
     * Selection ranges sent from the client.
     */
    clientVersionRanges?: AnnotationClientVersionRanges;
    /**
     * Timestamp for the created time of this annotation.
     */
    created?: string;
    /**
     * Selection ranges for the most recent content version.
     */
    currentVersionRanges?: AnnotationCurrentVersionRanges;
    /**
     * User-created data for this annotation.
     */
    data?: string;
    /**
     * Indicates that this annotation is deleted.
     */
    deleted?: boolean;
    /**
     * The highlight style for this annotation.
     */
    highlightStyle?: string;
    /**
     * Id of this annotation, in the form of a GUID.
     */
    id?: string;
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * The layer this annotation is for.
     */
    layerId?: string;
    layerSummary?: AnnotationLayerSummary;
    /**
     * Pages that this annotation spans.
     */
    pageIds?: string[];
    /**
     * Excerpt from the volume.
     */
    selectedText?: string;
    /**
     * URL to this resource.
     */
    selfLink?: string;
    /**
     * Timestamp for the last time this annotation was modified.
     */
    updated?: string;
    /**
     * The volume that this annotation belongs to.
     */
    volumeId?: string;
}
