package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation
 * Provides details on the currency exchange rate and contract.
**/
public class ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContractIdentification")
    public String contractIdentification;
    public ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation withContractIdentification(String contractIdentification) {
        this.contractIdentification = contractIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExchangeRate")
    public Double exchangeRate;
    public ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation withExchangeRate(Double exchangeRate) {
        this.exchangeRate = exchangeRate;
        return this;
    }
    @JsonProperty("RateType")
    public ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum rateType;
    public ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation withRateType(ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum rateType) {
        this.rateType = rateType;
        return this;
    }
    @JsonProperty("UnitCurrency")
    public String unitCurrency;
    public ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation withUnitCurrency(String unitCurrency) {
        this.unitCurrency = unitCurrency;
        return this;
    }
}