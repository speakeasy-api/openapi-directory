package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScanConfigError
 * Defines a custom error message used by CreateScanConfig and UpdateScanConfig APIs when scan configuration validation fails. It is also reported as part of a ScanRunErrorTrace message if scan validation fails due to a scan configuration error.
**/
public class ScanConfigError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public ScanConfigErrorCodeEnum code;
    public ScanConfigError withCode(ScanConfigErrorCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldName")
    public String fieldName;
    public ScanConfigError withFieldName(String fieldName) {
        this.fieldName = fieldName;
        return this;
    }
}