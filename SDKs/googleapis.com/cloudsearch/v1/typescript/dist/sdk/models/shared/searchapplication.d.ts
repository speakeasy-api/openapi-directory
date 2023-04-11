import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceRestriction } from "./datasourcerestriction";
import { FacetOptions } from "./facetoptions";
import { QueryInterpretationConfig } from "./queryinterpretationconfig";
import { ScoringConfig } from "./scoringconfig";
import { SortOptions } from "./sortoptions";
import { SourceConfig } from "./sourceconfig";
/**
 * SearchApplication
 */
export declare class SearchApplicationInput extends SpeakeasyBase {
    /**
     * Retrictions applied to the configurations. The maximum number of elements is 10.
     */
    dataSourceRestrictions?: DataSourceRestriction[];
    /**
     * The default fields for returning facet results. The sources specified here also have been included in data_source_restrictions above.
     */
    defaultFacetOptions?: FacetOptions[];
    defaultSortOptions?: SortOptions;
    /**
     * Display name of the Search Application. The maximum length is 300 characters.
     */
    displayName?: string;
    /**
     * Indicates whether audit logging is on/off for requests made for the search application in query APIs.
     */
    enableAuditLog?: boolean;
    /**
     * The name of the Search Application. Format: searchapplications/{application_id}.
     */
    name?: string;
    /**
     * Default options to interpret user query.
     */
    queryInterpretationConfig?: QueryInterpretationConfig;
    /**
     * With each result we should return the URI for its thumbnail (when applicable)
     */
    returnResultThumbnailUrls?: boolean;
    /**
     * Scoring configurations for a source while processing a Search or Suggest request.
     */
    scoringConfig?: ScoringConfig;
    /**
     * Configuration for a sources specified in data_source_restrictions.
     */
    sourceConfig?: SourceConfig[];
}
/**
 * SearchApplication
 */
export declare class SearchApplication extends SpeakeasyBase {
    /**
     * Retrictions applied to the configurations. The maximum number of elements is 10.
     */
    dataSourceRestrictions?: DataSourceRestriction[];
    /**
     * The default fields for returning facet results. The sources specified here also have been included in data_source_restrictions above.
     */
    defaultFacetOptions?: FacetOptions[];
    defaultSortOptions?: SortOptions;
    /**
     * Display name of the Search Application. The maximum length is 300 characters.
     */
    displayName?: string;
    /**
     * Indicates whether audit logging is on/off for requests made for the search application in query APIs.
     */
    enableAuditLog?: boolean;
    /**
     * The name of the Search Application. Format: searchapplications/{application_id}.
     */
    name?: string;
    /**
     * Output only. IDs of the Long Running Operations (LROs) currently running for this schema. Output only field.
     */
    operationIds?: string[];
    /**
     * Default options to interpret user query.
     */
    queryInterpretationConfig?: QueryInterpretationConfig;
    /**
     * With each result we should return the URI for its thumbnail (when applicable)
     */
    returnResultThumbnailUrls?: boolean;
    /**
     * Scoring configurations for a source while processing a Search or Suggest request.
     */
    scoringConfig?: ScoringConfig;
    /**
     * Configuration for a sources specified in data_source_restrictions.
     */
    sourceConfig?: SourceConfig[];
}
