import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WikiReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the wiki.
     */
    wikiId: string;
}
/**
 * The properties of the wiki.
 */
export declare class WikiReadWikiAttributes extends SpeakeasyBase {
    /**
     * Content type of the wiki (`text/markdown`).
     */
    contentType: string;
    /**
     * Whether the current user is allowed to post comments on this wiki.
     */
    currentUserCanComment: string;
    /**
     * The date and time at which the wiki was last modified, as an iso8601 formatted timestamp.
     */
    dateModified: Date;
    /**
     * A dictionary containing additional metadata about this wiki, including version information.
     */
    extra: string;
    /**
     * The type of object.
     */
    kind: string;
    /**
     * Materialized path to the wiki object.
     */
    materializedPath: string;
    /**
     * The name/title of the wiki page.
     */
    name: string;
    /**
     * Path to the wiki object.
     */
    path: string;
    /**
     * Size of the wiki.
     */
    size: string;
}
/**
 * URLs to alternative representations of the wiki.
 */
export declare class WikiReadWikiLinks extends SpeakeasyBase {
    /**
     * The URL to download the content of the wiki.
     */
    download?: string;
    /**
     * A link to the detail page for the wiki.
     */
    info?: string;
    /**
     * A link to the detail page for the wiki.
     */
    self?: string;
}
/**
 * URLs to other entities or entity collections that have a relationship to the wiki.
 */
export declare class WikiReadWikiRelationships extends SpeakeasyBase {
    /**
     * A relationship to the comments related to this wiki.
     */
    comments: string;
    /**
     * A relationship to the associated node.
     */
    node: string;
    /**
     * A relationship to the user associated with this wiki.
     */
    user: string;
}
/**
 * OK
 */
export declare class WikiReadWiki extends SpeakeasyBase {
    /**
     * The properties of the wiki.
     */
    attributes?: WikiReadWikiAttributes;
    /**
     * The identifier of the wiki.
     */
    id?: string;
    /**
     * URLs to alternative representations of the wiki.
     */
    links?: WikiReadWikiLinks;
    /**
     * URLs to other entities or entity collections that have a relationship to the wiki.
     */
    relationships: WikiReadWikiRelationships;
    /**
     * The type identifier of the wiki (`wikis`).
     */
    type: string;
}
export declare class WikiReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
