package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Product200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Product200ApplicationJsonData data;
    public Product200ApplicationJson withData(Product200ApplicationJsonData data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateStamp")
    public String dateStamp;
    public Product200ApplicationJson withDateStamp(String dateStamp) {
        this.dateStamp = dateStamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCodes")
    public String[] errorCodes;
    public Product200ApplicationJson withErrorCodes(String[] errorCodes) {
        this.errorCodes = errorCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public Object[] errorMessage;
    public Product200ApplicationJson withErrorMessage(Object[] errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessageText")
    public String errorMessageText;
    public Product200ApplicationJson withErrorMessageText(String errorMessageText) {
        this.errorMessageText = errorMessageText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorName")
    public String errorName;
    public Product200ApplicationJson withErrorName(String errorName) {
        this.errorName = errorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorReference")
    public String errorReference;
    public Product200ApplicationJson withErrorReference(String errorReference) {
        this.errorReference = errorReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorType")
    public String errorType;
    public Product200ApplicationJson withErrorType(String errorType) {
        this.errorType = errorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extraInfo")
    public java.util.Map<String, Object> extraInfo;
    public Product200ApplicationJson withExtraInfo(java.util.Map<String, Object> extraInfo) {
        this.extraInfo = extraInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extraObject")
    public java.util.Map<String, Object> extraObject;
    public Product200ApplicationJson withExtraObject(java.util.Map<String, Object> extraObject) {
        this.extraObject = extraObject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public Product200ApplicationJson withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCount")
    public Long totalCount;
    public Product200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmid")
    public String vmid;
    public Product200ApplicationJson withVmid(String vmid) {
        this.vmid = vmid;
        return this;
    }
}