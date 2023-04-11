import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAudienceSequenceFilter } from "./googleanalyticsadminv1alphaaudiencesequencefilter";
import { GoogleAnalyticsAdminV1alphaAudienceSimpleFilter } from "./googleanalyticsadminv1alphaaudiencesimplefilter";
/**
 * Required. Specifies whether this is an include or exclude filter clause.
 */
export declare enum GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum {
    AudienceClauseTypeUnspecified = "AUDIENCE_CLAUSE_TYPE_UNSPECIFIED",
    Include = "INCLUDE",
    Exclude = "EXCLUDE"
}
/**
 * A clause for defining either a simple or sequence filter. A filter can be inclusive (i.e., users satisfying the filter clause are included in the Audience) or exclusive (i.e., users satisfying the filter clause are excluded from the Audience).
 */
export declare class GoogleAnalyticsAdminV1alphaAudienceFilterClause extends SpeakeasyBase {
    /**
     * Required. Specifies whether this is an include or exclude filter clause.
     */
    clauseType?: GoogleAnalyticsAdminV1alphaAudienceFilterClauseClauseTypeEnum;
    /**
     * Defines filters that must occur in a specific order for the user to be a member of the Audience.
     */
    sequenceFilter?: GoogleAnalyticsAdminV1alphaAudienceSequenceFilter;
    /**
     * Defines a simple filter that a user must satisfy to be a member of the Audience.
     */
    simpleFilter?: GoogleAnalyticsAdminV1alphaAudienceSimpleFilter;
}
