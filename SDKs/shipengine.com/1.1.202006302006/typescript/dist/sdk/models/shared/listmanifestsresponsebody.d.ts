import { SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";
import { OptionalLink } from "./optionallink";
/**
 * Helpful links to other pages of results
**/
export declare class ListManifestsResponseBodyPaginationLink extends SpeakeasyBase {
    first: Link;
    last: Link;
    next: OptionalLink;
    prev: OptionalLink;
}
/**
 * Object containing the href link to download the manifest file
**/
export declare class ListManifestsResponseBodyManifestManifestDownload extends SpeakeasyBase {
    href?: string;
}
/**
 * Used for combining packages into one scannable form that a carrier can use when picking up a large
 * number of shipments
 *
**/
export declare class ListManifestsResponseBodyManifest extends SpeakeasyBase {
    carrierId?: Record<string, any>;
    createdAt?: Date;
    formId?: Record<string, any>;
    manifestDownload?: ListManifestsResponseBodyManifestManifestDownload;
    manifestId?: Record<string, any>;
    shipDate?: Date;
    shipments?: number;
    submissionId?: string;
    warehouseId?: Record<string, any>;
}
/**
 * A list manifests response body
**/
export declare class ListManifestsResponseBody extends SpeakeasyBase {
    links: ListManifestsResponseBodyPaginationLink;
    manifests: ListManifestsResponseBodyManifest[];
    page: number;
    pages: number;
    total: number;
}
