package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Hold
 * A hold. A hold prevents the specified Google Workspace service from purging data for specific accounts or all members of an organizational unit. To work with Vault resources, the account must have the [required Vault privileges] (https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
**/
public class Hold {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accounts")
    public HeldAccount[] accounts;
    public Hold withAccounts(HeldAccount[] accounts) {
        this.accounts = accounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corpus")
    public HoldCorpusEnum corpus;
    public Hold withCorpus(HoldCorpusEnum corpus) {
        this.corpus = corpus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holdId")
    public String holdId;
    public Hold withHoldId(String holdId) {
        this.holdId = holdId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Hold withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orgUnit")
    public HeldOrgUnit orgUnit;
    public Hold withOrgUnit(HeldOrgUnit orgUnit) {
        this.orgUnit = orgUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public CorpusQuery query;
    public Hold withQuery(CorpusQuery query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Hold withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}