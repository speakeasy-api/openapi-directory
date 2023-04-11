import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Image belonging to a custom search result.
 */
export declare class ResultImage extends SpeakeasyBase {
    /**
     * The size of the image, in bytes.
     */
    byteSize?: number;
    /**
     * A URL pointing to the webpage hosting the image.
     */
    contextLink?: string;
    /**
     * The height of the image, in pixels.
     */
    height?: number;
    /**
     * The height of the thumbnail image, in pixels.
     */
    thumbnailHeight?: number;
    /**
     * A URL to the thumbnail image.
     */
    thumbnailLink?: string;
    /**
     * The width of the thumbnail image, in pixels.
     */
    thumbnailWidth?: number;
    /**
     * The width of the image, in pixels.
     */
    width?: number;
}
/**
 * Refinement label associated with a custom search result.
 */
export declare class ResultLabels extends SpeakeasyBase {
    /**
     * The display name of a refinement label. This is the name you should display in your user interface.
     */
    displayName?: string;
    /**
     * Refinement label and the associated refinement operation.
     */
    labelWithOp?: string;
    /**
     * The name of a refinement label, which you can use to refine searches. Don't display this in your user interface; instead, use displayName.
     */
    name?: string;
}
/**
 * A custom search result.
 */
export declare class Result extends SpeakeasyBase {
    /**
     * Indicates the ID of Google's cached version of the search result.
     */
    cacheId?: string;
    /**
     * An abridged version of this search result’s URL, e.g. www.example.com.
     */
    displayLink?: string;
    /**
     * The file format of the search result.
     */
    fileFormat?: string;
    /**
     * The URL displayed after the snippet for each search result.
     */
    formattedUrl?: string;
    /**
     * The HTML-formatted URL displayed after the snippet for each search result.
     */
    htmlFormattedUrl?: string;
    /**
     * The snippet of the search result, in HTML.
     */
    htmlSnippet?: string;
    /**
     * The title of the search result, in HTML.
     */
    htmlTitle?: string;
    /**
     * Image belonging to a custom search result.
     */
    image?: ResultImage;
    /**
     * A unique identifier for the type of current object. For this API, it is `customsearch#result.`
     */
    kind?: string;
    /**
     * Encapsulates all information about refinement labels.
     */
    labels?: ResultLabels[];
    /**
     * The full URL to which the search result is pointing, e.g. http://www.example.com/foo/bar.
     */
    link?: string;
    /**
     * The MIME type of the search result.
     */
    mime?: string;
    /**
     * Contains [PageMap](https://developers.google.com/custom-search/docs/structured_data#pagemaps) information for this search result.
     */
    pagemap?: Record<string, any>;
    /**
     * The snippet of the search result, in plain text.
     */
    snippet?: string;
    /**
     * The title of the search result, in plain text.
     */
    title?: string;
}
