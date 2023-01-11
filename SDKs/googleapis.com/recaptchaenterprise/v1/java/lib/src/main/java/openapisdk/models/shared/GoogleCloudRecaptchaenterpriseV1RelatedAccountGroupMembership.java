package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership
 * A membership in a group of related accounts.
**/
public class GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hashedAccountId")
    public String hashedAccountId;
    public GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership withHashedAccountId(String hashedAccountId) {
        this.hashedAccountId = hashedAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership withName(String name) {
        this.name = name;
        return this;
    }
}