import { SpeakeasyBase } from "../../../internal/utils";
import { CombinedAudienceGroup } from "./combinedaudiencegroup";
import { CustomListGroup } from "./customlistgroup";
import { FirstAndThirdPartyAudienceGroup } from "./firstandthirdpartyaudiencegroup";
import { GoogleAudienceGroup } from "./googleaudiencegroup";
/**
 * Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups.
 */
export declare class AudienceGroupAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Details of first and third party audience group. All first and third party audience targeting settings are logically ‘OR’ of each other.
     */
    excludedFirstAndThirdPartyAudienceGroup?: FirstAndThirdPartyAudienceGroup;
    /**
     * Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other.
     */
    excludedGoogleAudienceGroup?: GoogleAudienceGroup;
    /**
     * Details of combined audience group. All combined audience targeting settings are logically ‘OR’ of each other.
     */
    includedCombinedAudienceGroup?: CombinedAudienceGroup;
    /**
     * Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other.
     */
    includedCustomListGroup?: CustomListGroup;
    /**
     * The first and third party audience ids and recencies of included first and third party audience groups. Each first and third party audience group contains first and third party audience ids only. The relation between each first and third party audience group is INTERSECTION, and the result is UNION'ed with other audience groups. Repeated groups with same settings will be ignored.
     */
    includedFirstAndThirdPartyAudienceGroups?: FirstAndThirdPartyAudienceGroup[];
    /**
     * Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other.
     */
    includedGoogleAudienceGroup?: GoogleAudienceGroup;
}
