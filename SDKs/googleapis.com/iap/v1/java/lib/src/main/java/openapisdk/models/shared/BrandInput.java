package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BrandInput
 * OAuth brand data. NOTE: Only contains a portion of the data that describes a brand.
**/
public class BrandInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationTitle")
    public String applicationTitle;
    public BrandInput withApplicationTitle(String applicationTitle) {
        this.applicationTitle = applicationTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportEmail")
    public String supportEmail;
    public BrandInput withSupportEmail(String supportEmail) {
        this.supportEmail = supportEmail;
        return this;
    }
}