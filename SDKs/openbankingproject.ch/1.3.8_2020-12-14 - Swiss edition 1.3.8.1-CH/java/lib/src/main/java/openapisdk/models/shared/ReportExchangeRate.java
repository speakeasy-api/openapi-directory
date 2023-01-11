package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportExchangeRate
 * Exchange Rate.
**/
public class ReportExchangeRate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractIdentification")
    public String contractIdentification;
    public ReportExchangeRate withContractIdentification(String contractIdentification) {
        this.contractIdentification = contractIdentification;
        return this;
    }
    @JsonProperty("exchangeRate")
    public String exchangeRate;
    public ReportExchangeRate withExchangeRate(String exchangeRate) {
        this.exchangeRate = exchangeRate;
        return this;
    }
    @JsonProperty("quotationDate")
    public LocalDate quotationDate;
    public ReportExchangeRate withQuotationDate(LocalDate quotationDate) {
        this.quotationDate = quotationDate;
        return this;
    }
    @JsonProperty("sourceCurrency")
    public String sourceCurrency;
    public ReportExchangeRate withSourceCurrency(String sourceCurrency) {
        this.sourceCurrency = sourceCurrency;
        return this;
    }
    @JsonProperty("targetCurrency")
    public String targetCurrency;
    public ReportExchangeRate withTargetCurrency(String targetCurrency) {
        this.targetCurrency = targetCurrency;
        return this;
    }
    @JsonProperty("unitCurrency")
    public String unitCurrency;
    public ReportExchangeRate withUnitCurrency(String unitCurrency) {
        this.unitCurrency = unitCurrency;
        return this;
    }
}