package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation
 * Provides details on the currency exchange rate and contract.
**/
public class ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContractIdentification")
    public String contractIdentification;
    public ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation withContractIdentification(String contractIdentification) {
        this.contractIdentification = contractIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExchangeRate")
    public Double exchangeRate;
    public ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation withExchangeRate(Double exchangeRate) {
        this.exchangeRate = exchangeRate;
        return this;
    }
    @JsonProperty("RateType")
    public ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum rateType;
    public ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation withRateType(ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum rateType) {
        this.rateType = rateType;
        return this;
    }
    @JsonProperty("UnitCurrency")
    public String unitCurrency;
    public ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation withUnitCurrency(String unitCurrency) {
        this.unitCurrency = unitCurrency;
        return this;
    }
}