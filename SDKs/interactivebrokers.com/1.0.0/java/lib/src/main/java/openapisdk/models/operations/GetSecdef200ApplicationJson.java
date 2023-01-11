package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSecdef200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompanyName")
    public String companyName;
    public GetSecdef200ApplicationJson withCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContractId")
    public Double contractId;
    public GetSecdef200ApplicationJson withContractId(Double contractId) {
        this.contractId = contractId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Currency")
    public String currency;
    public GetSecdef200ApplicationJson withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Exchange")
    public String exchange;
    public GetSecdef200ApplicationJson withExchange(String exchange) {
        this.exchange = exchange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityType")
    public String securityType;
    public GetSecdef200ApplicationJson withSecurityType(String securityType) {
        this.securityType = securityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ticker")
    public String ticker;
    public GetSecdef200ApplicationJson withTicker(String ticker) {
        this.ticker = ticker;
        return this;
    }
}