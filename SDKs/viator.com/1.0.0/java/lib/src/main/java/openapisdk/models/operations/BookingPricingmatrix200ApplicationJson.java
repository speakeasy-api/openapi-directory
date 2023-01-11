package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BookingPricingmatrix200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public BookingPricingmatrix200ApplicationJsonData[] data;
    public BookingPricingmatrix200ApplicationJson withData(BookingPricingmatrix200ApplicationJsonData[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateStamp")
    public String dateStamp;
    public BookingPricingmatrix200ApplicationJson withDateStamp(String dateStamp) {
        this.dateStamp = dateStamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCodes")
    public String[] errorCodes;
    public BookingPricingmatrix200ApplicationJson withErrorCodes(String[] errorCodes) {
        this.errorCodes = errorCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public Object[] errorMessage;
    public BookingPricingmatrix200ApplicationJson withErrorMessage(Object[] errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessageText")
    public String errorMessageText;
    public BookingPricingmatrix200ApplicationJson withErrorMessageText(String errorMessageText) {
        this.errorMessageText = errorMessageText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorName")
    public String errorName;
    public BookingPricingmatrix200ApplicationJson withErrorName(String errorName) {
        this.errorName = errorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorReference")
    public String errorReference;
    public BookingPricingmatrix200ApplicationJson withErrorReference(String errorReference) {
        this.errorReference = errorReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorType")
    public String errorType;
    public BookingPricingmatrix200ApplicationJson withErrorType(String errorType) {
        this.errorType = errorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extraInfo")
    public java.util.Map<String, Object> extraInfo;
    public BookingPricingmatrix200ApplicationJson withExtraInfo(java.util.Map<String, Object> extraInfo) {
        this.extraInfo = extraInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extraObject")
    public java.util.Map<String, Object> extraObject;
    public BookingPricingmatrix200ApplicationJson withExtraObject(java.util.Map<String, Object> extraObject) {
        this.extraObject = extraObject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public BookingPricingmatrix200ApplicationJson withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Long totalCount;
    public BookingPricingmatrix200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmid")
    public String vmid;
    public BookingPricingmatrix200ApplicationJson withVmid(String vmid) {
        this.vmid = vmid;
        return this;
    }
}