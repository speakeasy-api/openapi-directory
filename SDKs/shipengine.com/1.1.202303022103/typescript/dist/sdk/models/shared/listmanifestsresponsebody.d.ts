import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { OptionalLink } from "./optionallink";
/**
 * Helpful links to other pages of results
 */
export declare class ListManifestsResponseBodyPaginationLink extends SpeakeasyBase {
    /**
     * The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items.
     *
     * @remarks
     *
     */
    first: Link;
    /**
     * The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items.
     *
     * @remarks
     *
     */
    last: Link;
    /**
     * The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`.
     *
     * @remarks
     *
     */
    next: OptionalLink;
    /**
     * The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater.
     *
     * @remarks
     *
     */
    prev: OptionalLink;
}
/**
 * Object containing the href link to download the manifest file
 */
export declare class ListManifestsResponseBodyManifestManifestDownload extends SpeakeasyBase {
    /**
     * The URL of the linked resource, if any
     */
    href?: string;
}
/**
 * Used for combining packages into one scannable form that a carrier can use when picking up a large
 *
 * @remarks
 * number of shipments
 *
 */
export declare class ListManifestsResponseBodyManifest extends SpeakeasyBase {
    /**
     * A string that uniquely identifies the carrier
     */
    carrierId?: string;
    /**
     * The date-time that the manifest was created
     */
    createdAt?: Date;
    /**
     * A string that uniquely identifies the form
     */
    formId?: string;
    /**
     * An array of the label ids used in this manifest.
     */
    labelIds?: string[];
    manifestDownload?: ListManifestsResponseBodyManifestManifestDownload;
    /**
     * A string that uniquely identifies the manifest
     */
    manifestId?: string;
    /**
     * The date-time that the manifests shipments will be picked up
     */
    shipDate?: Date;
    /**
     * The number of shipments that are included in this manifest
     */
    shipments?: number;
    /**
     * A string that uniquely identifies the submission
     */
    submissionId?: string;
    /**
     * A string that uniquely identifies the warehouse
     */
    warehouseId?: string;
}
/**
 * A list manifests response body
 */
export declare class ListManifestsResponseBody extends SpeakeasyBase {
    /**
     * Helpful links to other pages of results
     */
    links: ListManifestsResponseBodyPaginationLink;
    /**
     * The list of available manifests
     */
    manifests: ListManifestsResponseBodyManifest[];
    /**
     * Current page of the list manifests results
     */
    page: number;
    /**
     * Total number of pages for list manifests results
     */
    pages: number;
    /**
     * The total number of manifests returned
     */
    total: number;
}
