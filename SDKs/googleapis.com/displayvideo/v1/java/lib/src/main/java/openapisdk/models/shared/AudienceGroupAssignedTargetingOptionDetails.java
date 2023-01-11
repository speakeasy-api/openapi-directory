package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AudienceGroupAssignedTargetingOptionDetails
 * Assigned audience group targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUDIENCE_GROUP`. The relation between each group is UNION, except for excluded_first_and_third_party_audience_group and excluded_google_audience_group, of which COMPLEMENT is used as an INTERSECTION with other groups.
**/
public class AudienceGroupAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedFirstAndThirdPartyAudienceGroup")
    public FirstAndThirdPartyAudienceGroup excludedFirstAndThirdPartyAudienceGroup;
    public AudienceGroupAssignedTargetingOptionDetails withExcludedFirstAndThirdPartyAudienceGroup(FirstAndThirdPartyAudienceGroup excludedFirstAndThirdPartyAudienceGroup) {
        this.excludedFirstAndThirdPartyAudienceGroup = excludedFirstAndThirdPartyAudienceGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedGoogleAudienceGroup")
    public GoogleAudienceGroup excludedGoogleAudienceGroup;
    public AudienceGroupAssignedTargetingOptionDetails withExcludedGoogleAudienceGroup(GoogleAudienceGroup excludedGoogleAudienceGroup) {
        this.excludedGoogleAudienceGroup = excludedGoogleAudienceGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedCombinedAudienceGroup")
    public CombinedAudienceGroup includedCombinedAudienceGroup;
    public AudienceGroupAssignedTargetingOptionDetails withIncludedCombinedAudienceGroup(CombinedAudienceGroup includedCombinedAudienceGroup) {
        this.includedCombinedAudienceGroup = includedCombinedAudienceGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedCustomListGroup")
    public CustomListGroup includedCustomListGroup;
    public AudienceGroupAssignedTargetingOptionDetails withIncludedCustomListGroup(CustomListGroup includedCustomListGroup) {
        this.includedCustomListGroup = includedCustomListGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedFirstAndThirdPartyAudienceGroups")
    public FirstAndThirdPartyAudienceGroup[] includedFirstAndThirdPartyAudienceGroups;
    public AudienceGroupAssignedTargetingOptionDetails withIncludedFirstAndThirdPartyAudienceGroups(FirstAndThirdPartyAudienceGroup[] includedFirstAndThirdPartyAudienceGroups) {
        this.includedFirstAndThirdPartyAudienceGroups = includedFirstAndThirdPartyAudienceGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedGoogleAudienceGroup")
    public GoogleAudienceGroup includedGoogleAudienceGroup;
    public AudienceGroupAssignedTargetingOptionDetails withIncludedGoogleAudienceGroup(GoogleAudienceGroup includedGoogleAudienceGroup) {
        this.includedGoogleAudienceGroup = includedGoogleAudienceGroup;
        return this;
    }
}