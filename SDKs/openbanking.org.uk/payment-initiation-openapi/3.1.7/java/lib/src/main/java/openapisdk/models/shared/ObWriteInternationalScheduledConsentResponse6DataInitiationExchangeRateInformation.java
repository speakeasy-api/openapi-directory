package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation
 * Provides details on the currency exchange rate and contract.
**/
public class ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContractIdentification")
    public String contractIdentification;
    public ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation withContractIdentification(String contractIdentification) {
        this.contractIdentification = contractIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExchangeRate")
    public Double exchangeRate;
    public ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation withExchangeRate(Double exchangeRate) {
        this.exchangeRate = exchangeRate;
        return this;
    }
    @JsonProperty("RateType")
    public ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum rateType;
    public ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation withRateType(ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum rateType) {
        this.rateType = rateType;
        return this;
    }
    @JsonProperty("UnitCurrency")
    public String unitCurrency;
    public ObWriteInternationalScheduledConsentResponse6DataInitiationExchangeRateInformation withUnitCurrency(String unitCurrency) {
        this.unitCurrency = unitCurrency;
        return this;
    }
}