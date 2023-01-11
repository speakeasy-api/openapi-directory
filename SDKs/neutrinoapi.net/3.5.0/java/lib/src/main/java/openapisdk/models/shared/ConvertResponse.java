package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConvertResponse {
    @JsonProperty("fromType")
    public String fromType;
    public ConvertResponse withFromType(String fromType) {
        this.fromType = fromType;
        return this;
    }
    @JsonProperty("fromValue")
    public String fromValue;
    public ConvertResponse withFromValue(String fromValue) {
        this.fromValue = fromValue;
        return this;
    }
    @JsonProperty("result")
    public String result;
    public ConvertResponse withResult(String result) {
        this.result = result;
        return this;
    }
    @JsonProperty("resultFloat")
    public Double resultFloat;
    public ConvertResponse withResultFloat(Double resultFloat) {
        this.resultFloat = resultFloat;
        return this;
    }
    @JsonProperty("toType")
    public String toType;
    public ConvertResponse withToType(String toType) {
        this.toType = toType;
        return this;
    }
    @JsonProperty("valid")
    public Boolean valid;
    public ConvertResponse withValid(Boolean valid) {
        this.valid = valid;
        return this;
    }
}