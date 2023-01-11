package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AvailableProducts200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public AvailableProducts200ApplicationJsonData[] data;
    public AvailableProducts200ApplicationJson withData(AvailableProducts200ApplicationJsonData[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateStamp")
    public String dateStamp;
    public AvailableProducts200ApplicationJson withDateStamp(String dateStamp) {
        this.dateStamp = dateStamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCodes")
    public String[] errorCodes;
    public AvailableProducts200ApplicationJson withErrorCodes(String[] errorCodes) {
        this.errorCodes = errorCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public Object[] errorMessage;
    public AvailableProducts200ApplicationJson withErrorMessage(Object[] errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessageText")
    public String errorMessageText;
    public AvailableProducts200ApplicationJson withErrorMessageText(String errorMessageText) {
        this.errorMessageText = errorMessageText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorName")
    public String errorName;
    public AvailableProducts200ApplicationJson withErrorName(String errorName) {
        this.errorName = errorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorReference")
    public String errorReference;
    public AvailableProducts200ApplicationJson withErrorReference(String errorReference) {
        this.errorReference = errorReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorType")
    public String errorType;
    public AvailableProducts200ApplicationJson withErrorType(String errorType) {
        this.errorType = errorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extraInfo")
    public java.util.Map<String, Object> extraInfo;
    public AvailableProducts200ApplicationJson withExtraInfo(java.util.Map<String, Object> extraInfo) {
        this.extraInfo = extraInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extraObject")
    public java.util.Map<String, Object> extraObject;
    public AvailableProducts200ApplicationJson withExtraObject(java.util.Map<String, Object> extraObject) {
        this.extraObject = extraObject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public AvailableProducts200ApplicationJson withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Long totalCount;
    public AvailableProducts200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmid")
    public String vmid;
    public AvailableProducts200ApplicationJson withVmid(String vmid) {
        this.vmid = vmid;
        return this;
    }
}