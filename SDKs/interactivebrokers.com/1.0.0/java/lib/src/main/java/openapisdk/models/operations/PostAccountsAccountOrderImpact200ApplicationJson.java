package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAccountsAccountOrderImpact200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Commission")
    public Double commission;
    public PostAccountsAccountOrderImpact200ApplicationJson withCommission(Double commission) {
        this.commission = commission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CommissionsCurrency")
    public String commissionsCurrency;
    public PostAccountsAccountOrderImpact200ApplicationJson withCommissionsCurrency(String commissionsCurrency) {
        this.commissionsCurrency = commissionsCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EquityWithLoan")
    public Double equityWithLoan;
    public PostAccountsAccountOrderImpact200ApplicationJson withEquityWithLoan(Double equityWithLoan) {
        this.equityWithLoan = equityWithLoan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InitMargin")
    public Double initMargin;
    public PostAccountsAccountOrderImpact200ApplicationJson withInitMargin(Double initMargin) {
        this.initMargin = initMargin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InitMarginBefore")
    public Double initMarginBefore;
    public PostAccountsAccountOrderImpact200ApplicationJson withInitMarginBefore(Double initMarginBefore) {
        this.initMarginBefore = initMarginBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaintMargin")
    public Double maintMargin;
    public PostAccountsAccountOrderImpact200ApplicationJson withMaintMargin(Double maintMargin) {
        this.maintMargin = maintMargin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaintMarginBefore")
    public Double maintMarginBefore;
    public PostAccountsAccountOrderImpact200ApplicationJson withMaintMarginBefore(Double maintMarginBefore) {
        this.maintMarginBefore = maintMarginBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MarginCurrency")
    public String marginCurrency;
    public PostAccountsAccountOrderImpact200ApplicationJson withMarginCurrency(String marginCurrency) {
        this.marginCurrency = marginCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxCommissions")
    public Double maxCommissions;
    public PostAccountsAccountOrderImpact200ApplicationJson withMaxCommissions(Double maxCommissions) {
        this.maxCommissions = maxCommissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinCommissions")
    public Double minCommissions;
    public PostAccountsAccountOrderImpact200ApplicationJson withMinCommissions(Double minCommissions) {
        this.minCommissions = minCommissions;
        return this;
    }
}