package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UsageReportEntity
 * Output only. Information about the type of the item.
**/
public class UsageReportEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public UsageReportEntity withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entityId")
    public String entityId;
    public UsageReportEntity withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileId")
    public String profileId;
    public UsageReportEntity withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UsageReportEntity withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEmail")
    public String userEmail;
    public UsageReportEntity withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
}