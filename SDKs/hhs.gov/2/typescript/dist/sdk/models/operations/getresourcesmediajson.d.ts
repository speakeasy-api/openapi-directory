import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetResourcesMediaJsonRequest extends SpeakeasyBase {
    /**
     * Restrict filtering to media items in a specific collection.
     */
    collectionId?: number;
    /**
     * Find all media items authored before the provided day (RFC 3339, time ignored).
     */
    contentAuthoredBeforeDate?: Date;
    /**
     * Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored).
     */
    contentAuthoredInRange?: string;
    /**
     * Find all media items authored since the provided day (RFC 3339, time ignored).
     */
    contentAuthoredSinceDate?: Date;
    /**
     * Find all media items published before the provided day (RFC 3339, time ignored).
     */
    contentPublishedBeforeDate?: Date;
    /**
     * Find all media items published between the provided start and end days (RFC 3339, comma separated, time ignored).
     */
    contentPublishedInRange?: string;
    /**
     * Find all media items updated since the provided day (RFC 3339, time ignored).
     */
    contentPublishedSinceDate?: Date;
    /**
     * Find all media items reviewed before the provided day (RFC 3339, time ignored).
     */
    contentReviewedBeforeDate?: Date;
    /**
     * Find all media items reviewed between the provided start and end days (RFC 3339, comma separated, time ignored).
     */
    contentReviewedInRange?: string;
    /**
     * Find all media items reviewed since the provided day (RFC 3339, time ignored).
     */
    contentReviewedSinceDate?: Date;
    /**
     * Find all media items updated before the provided day (RFC 3339, time ignored).
     */
    contentUpdatedBeforeDate?: Date;
    /**
     * Find all media items updated between the provided start and end days (RFC 3339, comma separated, time ignored).
     */
    contentUpdatedInRange?: string;
    /**
     * Find all media items updated since the provided day (RFC 3339, time ignored).
     */
    contentUpdatedSinceDate?: Date;
    /**
     * Find all media items containing the createdBy value.
     */
    createdBy?: string;
    /**
     * Find all media items which have the provided customThumbnailUrl, case insensitive.
     */
    customThumbnailUrl?: string;
    /**
     * Find all media items which contain the provided partial customThumbnailUrl, case insensitive.
     */
    customThumbnailUrlContains?: string;
    /**
     * Find all media items authored on the provided day (RFC 3339, time ignored).
     */
    dateContentAuthored?: Date;
    /**
     * Find all media items published on the provided day (RFC 3339, time ignored).
     */
    dateContentPublished?: Date;
    /**
     * Find all media items reviewed on the provided day (RFC 3339, time ignored).
     */
    dateContentReviewed?: Date;
    /**
     * Find all media items updated on the provided day (RFC 3339, time ignored).
     */
    dateContentUpdated?: Date;
    /**
     * Find all media items syndicated on the provided day (RFC 3339, time ignored).
     */
    dateSyndicationCaptured?: Date;
    /**
     * Find all media items updated through the syndication system on the provided day, (RFC 3339, time ignored).
     */
    dateSyndicationUpdated?: Date;
    /**
     * Find all media items containing the provided partial description, case insensitive.
     */
    descriptionContains?: string;
    /**
     * Find all media items which match the provided hash, case insensitive.
     */
    hash?: string;
    /**
     * Find all media items which match the provided partial hash, case insensitive.
     */
    hashContains?: string;
    /**
     * Find all media items written in the language specified by Id.
     */
    languageId?: number;
    /**
     * Find all media items written in the language specified by 639-2 isoCode , case insensitive.
     */
    languageIsoCode?: string;
    /**
     * Find all media items written in the language specified by name, case insensitive.
     */
    languageName?: string;
    /**
     * The maximum number of records to return
     */
    max?: number;
    /**
     * Find all media items belonging to the specified media type[s].
     */
    mediaTypes?: string;
    /**
     * Find all media items containing the provided name, case insensitive.
     */
    name?: string;
    /**
     * Find all media items containing the partial name, case insensitive.
     */
    nameContains?: string;
    /**
     * The offset of the records set to return for pagination.
     */
    offset?: number;
    /**
     * * The ascending or descending order.
     */
    order?: string;
    /**
     * Find only media from within the supplied list of Ids.
     */
    restrictToSet?: string;
    /**
     * * Set of fields to sort the records by.
     */
    sort?: string;
    /**
     * Find all media items that belong to the source specified by acronym, case insensitive.
     */
    sourceAcronym?: string;
    /**
     * Find all media items that belong to the source specified by partial acronym, case insensitive.
     */
    sourceAcronymContains?: string;
    /**
     * Find all media items that belong to the source specified by Id.
     */
    sourceId?: number;
    /**
     * Find all media items that belong to the source specified by name, case insensitive.
     */
    sourceName?: string;
    /**
     * Find all media items that belong to the source specified by partial name, case insensitive.
     */
    sourceNameContains?: string;
    /**
     * Find all media items which have the provided sourceUrl, case insensitive.
     */
    sourceUrl?: string;
    /**
     * Find all media items which contain the provided partial sourceUrl, case insensitive.
     */
    sourceUrlContains?: string;
    /**
     * Find all media items authored before the provided day (RFC 3339, time ignored).
     */
    syndicationCapturedBeforeDate?: Date;
    /**
     * Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored).
     */
    syndicationCapturedInRange?: string;
    /**
     * Find all media items authored since the provided day (RFC 3339, time ignored).
     */
    syndicationCapturedSinceDate?: Date;
    /**
     * Find all media items updated before the provided day, (RFC 3339, time ignored).
     */
    syndicationUpdatedBeforeDate?: Date;
    /**
     * Find all media items updated between the provided start and end days, (RFC 3339, comma separated, time ignored).
     */
    syndicationUpdatedInRange?: string;
    /**
     * Find all media items updated since the provided day, (RFC 3339, time ignored).
     */
    syndicationUpdatedSinceDate?: Date;
    /**
     * Find all media items visible before the provided day, (RFC 3339, time ignored).
     */
    syndicationVisibleBeforeDate?: Date;
    /**
     * Find all media items visible between the provided start and end days, (RFC 3339, comma separated, time ignored).
     */
    syndicationVisibleInRange?: Date;
    /**
     * Find all media items visible since the provided day, (RFC 3339, time ignored).
     */
    syndicationVisibleSinceDate?: Date;
    /**
     * Find only media items tagged with the specified tag Ids.
     */
    tagIds?: string;
}
export declare class GetResourcesMediaJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Returns the list of MediaItems matching the specified query parameters.
     */
    mediaItemWrappeds?: shared.MediaItemWrapped[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
