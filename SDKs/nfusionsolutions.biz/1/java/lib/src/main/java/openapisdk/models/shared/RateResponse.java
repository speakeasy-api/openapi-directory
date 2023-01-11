package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Rate data;
    public RateResponse withData(Rate data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public RateResponse withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedCurrency")
    public String requestedCurrency;
    public RateResponse withRequestedCurrency(String requestedCurrency) {
        this.requestedCurrency = requestedCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedSymbol")
    public String requestedSymbol;
    public RateResponse withRequestedSymbol(String requestedSymbol) {
        this.requestedSymbol = requestedSymbol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedUnitOfMeasure")
    public String requestedUnitOfMeasure;
    public RateResponse withRequestedUnitOfMeasure(String requestedUnitOfMeasure) {
        this.requestedUnitOfMeasure = requestedUnitOfMeasure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public RateResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}