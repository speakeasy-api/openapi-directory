package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Brand
 * OAuth brand data. NOTE: Only contains a portion of the data that describes a brand.
**/
public class Brand {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicationTitle")
    public String applicationTitle;
    public Brand withApplicationTitle(String applicationTitle) {
        this.applicationTitle = applicationTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Brand withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgInternalOnly")
    public Boolean orgInternalOnly;
    public Brand withOrgInternalOnly(Boolean orgInternalOnly) {
        this.orgInternalOnly = orgInternalOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportEmail")
    public String supportEmail;
    public Brand withSupportEmail(String supportEmail) {
        this.supportEmail = supportEmail;
        return this;
    }
}