import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesMediaIdSyndicateFormatRequest extends SpeakeasyBase {
    /**
     * If content is a video, the embeded video will auto play when loaded.
     */
    autoplay?: boolean;
    /**
     * The css class to target for extraction.
     */
    cssClass?: string;
    /**
     * Set font size (in points) of p, div, and span tags.
     */
    fontSize?: number;
    /**
     * Automatically added
     */
    format: string;
    /**
     * The id of the media to show embed code for.
     */
    id: number;
    /**
     * Accepts valid CSS float options, such as 'left' or 'right'. Will inject a style into the content before rendering.
     */
    imageFloat?: string;
    /**
     * Accepts 4 CSV values representing pixel sizes of margin similar to CSS. Default format is 'north,east,south,west' - for example '0,10,10,0' would put a 10 pixel margin on the right and bottom sides of an image. Will inject a style into the content before rendering.
     */
    imageMargin?: string;
    /**
     * If content is a video, related items will be shown at the end of playback.
     */
    rel?: boolean;
    /**
     * Remove break tags from content.
     */
    stripBreaks?: boolean;
    /**
     * Remove class attributes from content (except 'syndicate').
     */
    stripClasses?: boolean;
    /**
     * Remove image tags from content.
     */
    stripImages?: boolean;
    /**
     * Remove script tags from content.
     */
    stripScripts?: boolean;
    /**
     * Remove in-line styles from content.
     */
    stripStyles?: boolean;
}
export declare class GetResourcesMediaIdSyndicateFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the syndicated content for a given MediaItem in the specified 'format' (HTML or JSON).
     */
    syndicateMarshallerWrapped?: shared.SyndicateMarshallerWrapped;
}
