package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FundingAccountResponse2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public FundingAccountResponse2 withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public FundingAccountResponse2 withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archived")
    public Boolean archived;
    public FundingAccountResponse2 withArchived(Boolean archived) {
        this.archived = archived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public FundingAccountResponse2 withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public FundingAccountResponse2 withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FundingAccountResponse2 withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FundingAccountResponse2 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorId")
    public String payorId;
    public FundingAccountResponse2 withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingNumber")
    public String routingNumber;
    public FundingAccountResponse2 withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public FundingAccountResponse2 withType(String type) {
        this.type = type;
        return this;
    }
}