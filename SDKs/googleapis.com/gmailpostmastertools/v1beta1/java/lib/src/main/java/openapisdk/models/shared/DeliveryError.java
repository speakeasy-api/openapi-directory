package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeliveryError
 * Metric on a particular delivery error type.
**/
public class DeliveryError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorClass")
    public DeliveryErrorErrorClassEnum errorClass;
    public DeliveryError withErrorClass(DeliveryErrorErrorClassEnum errorClass) {
        this.errorClass = errorClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorRatio")
    public Double errorRatio;
    public DeliveryError withErrorRatio(Double errorRatio) {
        this.errorRatio = errorRatio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorType")
    public DeliveryErrorErrorTypeEnum errorType;
    public DeliveryError withErrorType(DeliveryErrorErrorTypeEnum errorType) {
        this.errorType = errorType;
        return this;
    }
}