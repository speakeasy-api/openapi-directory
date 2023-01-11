package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup
 * A group of related accounts.
**/
public class GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup withName(String name) {
        this.name = name;
        return this;
    }
}