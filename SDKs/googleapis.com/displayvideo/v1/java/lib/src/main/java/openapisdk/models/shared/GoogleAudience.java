package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAudience
 * Describes a Google audience resource. Includes Google audience lists.
**/
public class GoogleAudience {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleAudience withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleAudienceId")
    public String googleAudienceId;
    public GoogleAudience withGoogleAudienceId(String googleAudienceId) {
        this.googleAudienceId = googleAudienceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("googleAudienceType")
    public GoogleAudienceGoogleAudienceTypeEnum googleAudienceType;
    public GoogleAudience withGoogleAudienceType(GoogleAudienceGoogleAudienceTypeEnum googleAudienceType) {
        this.googleAudienceType = googleAudienceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleAudience withName(String name) {
        this.name = name;
        return this;
    }
}