import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The criteria that select the subspace used for query matching.
 */
export declare class GoogleCloudDatacatalogV1SearchCatalogRequestScope extends SpeakeasyBase {
    /**
     * If `true`, include Google Cloud public datasets in search results. By default, they are excluded. See [Google Cloud Public Datasets](/public-datasets) for more information.
     */
    includeGcpPublicDatasets?: boolean;
    /**
     * The list of organization IDs to search within. To find your organization ID, follow the steps from [Creating and managing organizations] (/resource-manager/docs/creating-managing-organization).
     */
    includeOrgIds?: string[];
    /**
     * The list of project IDs to search within. For more information on the distinction between project names, IDs, and numbers, see [Projects](/docs/overview/#projects).
     */
    includeProjectIds?: string[];
    /**
     * Optional. This field is deprecated. The search mechanism for public and private tag templates is the same.
     */
    includePublicTagTemplates?: boolean;
    /**
     * Optional. The list of locations to search within. If empty, all locations are searched. Returns an error if any location in the list isn't one of the [Supported regions](https://cloud.google.com/data-catalog/docs/concepts/regions#supported_regions). If a location is unreachable, its name is returned in the `SearchCatalogResponse.unreachable` field. To get additional information on the error, repeat the search request and set the location name as the value of this parameter.
     */
    restrictedLocations?: string[];
    /**
     * Optional. If `true`, search only among starred entries. By default, all results are returned, starred or not.
     */
    starredOnly?: boolean;
}
