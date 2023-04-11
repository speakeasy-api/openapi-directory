import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseEntity } from "./databaseentity";
/**
 * Response message for 'DescribeDatabaseEntities' request.
 */
export declare class DescribeDatabaseEntitiesResponse extends SpeakeasyBase {
    /**
     * The list of database entities for the conversion workspace.
     */
    databaseEntities?: DatabaseEntity[];
    /**
     * A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
