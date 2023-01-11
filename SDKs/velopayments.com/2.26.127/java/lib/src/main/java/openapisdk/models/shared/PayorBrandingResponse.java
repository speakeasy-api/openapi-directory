package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PayorBrandingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collectiveAlias")
    public String collectiveAlias;
    public PayorBrandingResponse withCollectiveAlias(String collectiveAlias) {
        this.collectiveAlias = collectiveAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dbaName")
    public String dbaName;
    public PayorBrandingResponse withDbaName(String dbaName) {
        this.dbaName = dbaName;
        return this;
    }
    @JsonProperty("logoUrl")
    public String logoUrl;
    public PayorBrandingResponse withLogoUrl(String logoUrl) {
        this.logoUrl = logoUrl;
        return this;
    }
    @JsonProperty("payorName")
    public String payorName;
    public PayorBrandingResponse withPayorName(String payorName) {
        this.payorName = payorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportContact")
    public String supportContact;
    public PayorBrandingResponse withSupportContact(String supportContact) {
        this.supportContact = supportContact;
        return this;
    }
}