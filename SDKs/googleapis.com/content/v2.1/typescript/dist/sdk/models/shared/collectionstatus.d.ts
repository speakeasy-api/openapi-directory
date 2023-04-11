import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionStatusDestinationStatus } from "./collectionstatusdestinationstatus";
import { CollectionStatusItemLevelIssue } from "./collectionstatusitemlevelissue";
/**
 * The collectionstatus message.
 */
export declare class CollectionStatus extends SpeakeasyBase {
    /**
     * A list of all issues associated with the collection.
     */
    collectionLevelIssuses?: CollectionStatusItemLevelIssue[];
    /**
     * Date on which the collection has been created in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z"
     */
    creationDate?: string;
    /**
     * The intended destinations for the collection.
     */
    destinationStatuses?: CollectionStatusDestinationStatus[];
    /**
     * Required. The ID of the collection for which status is reported.
     */
    id?: string;
    /**
     * Date on which the collection has been last updated in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z"
     */
    lastUpdateDate?: string;
}
