package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountAdwordsLink {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adwordsId")
    public String adwordsId;
    public AccountAdwordsLink withAdwordsId(String adwordsId) {
        this.adwordsId = adwordsId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public AccountAdwordsLink withStatus(String status) {
        this.status = status;
        return this;
    }
}