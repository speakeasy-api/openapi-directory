package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PayoutCompanyV3 {
    @JsonProperty("companyName")
    public String companyName;
    public PayoutCompanyV3 withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
}