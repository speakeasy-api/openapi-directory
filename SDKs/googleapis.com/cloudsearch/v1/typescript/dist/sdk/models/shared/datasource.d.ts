import { SpeakeasyBase } from "../../../internal/utils";
import { GSuitePrincipal } from "./gsuiteprincipal";
/**
 * Datasource is a logical namespace for items to be indexed. All items must belong to a datasource. This is the prerequisite before items can be indexed into Cloud Search.
 */
export declare class DataSource extends SpeakeasyBase {
    /**
     * If true, sets the datasource to read-only mode. In read-only mode, the Indexing API rejects any requests to index or delete items in this source. Enabling read-only mode does not stop the processing of previously accepted data.
     */
    disableModifications?: boolean;
    /**
     * Disable serving any search or assist results.
     */
    disableServing?: boolean;
    /**
     * Required. Display name of the datasource The maximum length is 300 characters.
     */
    displayName?: string;
    /**
     * List of service accounts that have indexing access.
     */
    indexingServiceAccounts?: string[];
    /**
     * This field restricts visibility to items at the datasource level. Items within the datasource are restricted to the union of users and groups included in this field. Note that, this does not ensure access to a specific item, as users need to have ACL permissions on the contained items. This ensures a high level access on the entire datasource, and that the individual items are not shared outside this visibility.
     */
    itemsVisibility?: GSuitePrincipal[];
    /**
     * The name of the datasource resource. Format: datasources/{source_id}. The name is ignored when creating a datasource.
     */
    name?: string;
    /**
     * IDs of the Long Running Operations (LROs) currently running for this schema.
     */
    operationIds?: string[];
    /**
     * Can a user request to get thumbnail URI for Items indexed in this data source.
     */
    returnThumbnailUrls?: boolean;
    /**
     * A short name or alias for the source. This value will be used to match the 'source' operator. For example, if the short name is *<value>* then queries like *source:<value>* will only return results for this source. The value must be unique across all datasources. The value must only contain alphanumeric characters (a-zA-Z0-9). The value cannot start with 'google' and cannot be one of the following: mail, gmail, docs, drive, groups, sites, calendar, hangouts, gplus, keep, people, teams. Its maximum length is 32 characters.
     */
    shortName?: string;
}
