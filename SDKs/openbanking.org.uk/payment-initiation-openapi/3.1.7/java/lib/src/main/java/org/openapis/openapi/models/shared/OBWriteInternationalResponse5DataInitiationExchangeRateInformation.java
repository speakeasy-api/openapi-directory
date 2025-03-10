/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OBWriteInternationalResponse5DataInitiationExchangeRateInformation - Provides details on the currency exchange rate and contract.
 */
public class OBWriteInternationalResponse5DataInitiationExchangeRateInformation {
    /**
     * Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContractIdentification")
    public String contractIdentification;

    public OBWriteInternationalResponse5DataInitiationExchangeRateInformation withContractIdentification(String contractIdentification) {
        this.contractIdentification = contractIdentification;
        return this;
    }
    
    /**
     * The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExchangeRate")
    public Double exchangeRate;

    public OBWriteInternationalResponse5DataInitiationExchangeRateInformation withExchangeRate(Double exchangeRate) {
        this.exchangeRate = exchangeRate;
        return this;
    }
    
    /**
     * Specifies the type used to complete the currency exchange.
     */
    @JsonProperty("RateType")
    public OBWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum rateType;

    public OBWriteInternationalResponse5DataInitiationExchangeRateInformation withRateType(OBWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum rateType) {
        this.rateType = rateType;
        return this;
    }
    
    /**
     * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
     */
    @JsonProperty("UnitCurrency")
    public String unitCurrency;

    public OBWriteInternationalResponse5DataInitiationExchangeRateInformation withUnitCurrency(String unitCurrency) {
        this.unitCurrency = unitCurrency;
        return this;
    }
    
    public OBWriteInternationalResponse5DataInitiationExchangeRateInformation(@JsonProperty("RateType") OBWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum rateType, @JsonProperty("UnitCurrency") String unitCurrency) {
        this.rateType = rateType;
        this.unitCurrency = unitCurrency;
  }
}
