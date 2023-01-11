package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObWriteInternational3DataInitiationExchangeRateInformation
 * Provides details on the currency exchange rate and contract.
**/
public class ObWriteInternational3DataInitiationExchangeRateInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContractIdentification")
    public String contractIdentification;
    public ObWriteInternational3DataInitiationExchangeRateInformation withContractIdentification(String contractIdentification) {
        this.contractIdentification = contractIdentification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExchangeRate")
    public Double exchangeRate;
    public ObWriteInternational3DataInitiationExchangeRateInformation withExchangeRate(Double exchangeRate) {
        this.exchangeRate = exchangeRate;
        return this;
    }
    @JsonProperty("RateType")
    public ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum rateType;
    public ObWriteInternational3DataInitiationExchangeRateInformation withRateType(ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum rateType) {
        this.rateType = rateType;
        return this;
    }
    @JsonProperty("UnitCurrency")
    public String unitCurrency;
    public ObWriteInternational3DataInitiationExchangeRateInformation withUnitCurrency(String unitCurrency) {
        this.unitCurrency = unitCurrency;
        return this;
    }
}