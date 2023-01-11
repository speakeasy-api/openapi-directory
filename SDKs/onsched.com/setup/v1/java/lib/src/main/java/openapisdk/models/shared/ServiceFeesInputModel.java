package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ServiceFeesInputModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationFeeAmount")
    public Double cancellationFeeAmount;
    public ServiceFeesInputModel withCancellationFeeAmount(Double cancellationFeeAmount) {
        this.cancellationFeeAmount = cancellationFeeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cancellationFeeTaxable")
    public Boolean cancellationFeeTaxable;
    public ServiceFeesInputModel withCancellationFeeTaxable(Boolean cancellationFeeTaxable) {
        this.cancellationFeeTaxable = cancellationFeeTaxable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feeAmount")
    public Double feeAmount;
    public ServiceFeesInputModel withFeeAmount(Double feeAmount) {
        this.feeAmount = feeAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feeTaxable")
    public Boolean feeTaxable;
    public ServiceFeesInputModel withFeeTaxable(Boolean feeTaxable) {
        this.feeTaxable = feeTaxable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonRefundable")
    public Boolean nonRefundable;
    public ServiceFeesInputModel withNonRefundable(Boolean nonRefundable) {
        this.nonRefundable = nonRefundable;
        return this;
    }
}