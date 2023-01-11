package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FundingAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public FundingAccountResponse withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public FundingAccountResponse withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public FundingAccountResponse withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public FundingAccountResponse withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FundingAccountResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public FundingAccountResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payorId")
    public String payorId;
    public FundingAccountResponse withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routingNumber")
    public String routingNumber;
    public FundingAccountResponse withRoutingNumber(String routingNumber) {
        this.routingNumber = routingNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceAccountIds")
    public String[] sourceAccountIds;
    public FundingAccountResponse withSourceAccountIds(String[] sourceAccountIds) {
        this.sourceAccountIds = sourceAccountIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public FundingAccountResponse withType(String type) {
        this.type = type;
        return this;
    }
}