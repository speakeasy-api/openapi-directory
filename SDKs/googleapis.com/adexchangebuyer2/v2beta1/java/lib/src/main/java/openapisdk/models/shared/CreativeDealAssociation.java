package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeDealAssociation
 * The association between a creative and a deal.
**/
public class CreativeDealAssociation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public CreativeDealAssociation withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeId")
    public String creativeId;
    public CreativeDealAssociation withCreativeId(String creativeId) {
        this.creativeId = creativeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dealsId")
    public String dealsId;
    public CreativeDealAssociation withDealsId(String dealsId) {
        this.dealsId = dealsId;
        return this;
    }
}