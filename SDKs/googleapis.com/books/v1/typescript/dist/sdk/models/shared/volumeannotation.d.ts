import { SpeakeasyBase } from "../../../internal/utils";
import { BooksAnnotationsRange } from "./booksannotationsrange";
/**
 * The content ranges to identify the selected text.
 */
export declare class VolumeannotationContentRanges extends SpeakeasyBase {
    cfiRange?: BooksAnnotationsRange;
    /**
     * Content version applicable to ranges below.
     */
    contentVersion?: string;
    gbImageRange?: BooksAnnotationsRange;
    gbTextRange?: BooksAnnotationsRange;
}
/**
 * Successful response
 */
export declare class Volumeannotation extends SpeakeasyBase {
    /**
     * The annotation data id for this volume annotation.
     */
    annotationDataId?: string;
    /**
     * Link to get data for this annotation.
     */
    annotationDataLink?: string;
    /**
     * The type of annotation this is.
     */
    annotationType?: string;
    /**
     * The content ranges to identify the selected text.
     */
    contentRanges?: VolumeannotationContentRanges;
    /**
     * Data for this annotation.
     */
    data?: string;
    /**
     * Indicates that this annotation is deleted.
     */
    deleted?: boolean;
    /**
     * Unique id of this volume annotation.
     */
    id?: string;
    /**
     * Resource Type
     */
    kind?: string;
    /**
     * The Layer this annotation is for.
     */
    layerId?: string;
    /**
     * Pages the annotation spans.
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
     * Timestamp for the last time this anntoation was updated. (RFC 3339 UTC date-time format).
     */
    updated?: string;
    /**
     * The Volume this annotation is for.
     */
    volumeId?: string;
}
