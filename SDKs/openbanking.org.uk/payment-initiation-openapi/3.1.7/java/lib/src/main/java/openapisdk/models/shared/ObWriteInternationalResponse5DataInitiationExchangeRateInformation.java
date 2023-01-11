package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternationalResponse5DataInitiationExchangeRateInformation
 * Provides details on the currency exchange rate and contract.
**/
public class ObWriteInternationalResponse5DataInitiationExchangeRateInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContractIdentification")
    public String contractIdentification;
    public ObWriteInternationalResponse5DataInitiationExchangeRateInformation withContractIdentification(String contractIdentification) {
        this.contractIdentification = contractIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExchangeRate")
    public Double exchangeRate;
    public ObWriteInternationalResponse5DataInitiationExchangeRateInformation withExchangeRate(Double exchangeRate) {
        this.exchangeRate = exchangeRate;
        return this;
    }
    @JsonProperty("RateType")
    public ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum rateType;
    public ObWriteInternationalResponse5DataInitiationExchangeRateInformation withRateType(ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum rateType) {
        this.rateType = rateType;
        return this;
    }
    @JsonProperty("UnitCurrency")
    public String unitCurrency;
    public ObWriteInternationalResponse5DataInitiationExchangeRateInformation withUnitCurrency(String unitCurrency) {
        this.unitCurrency = unitCurrency;
        return this;
    }
}