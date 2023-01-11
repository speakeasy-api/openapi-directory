package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OperatingStatus
 * Current status of facility operations. The overall status of the facility, which can be: Normal Hours and Services, Facility Notice, Limited Hours and/or Services, or Closed. This field replaces active_status.
**/
public class OperatingStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additional_info")
    public String additionalInfo;
    public OperatingStatus withAdditionalInfo(String additionalInfo) {
        this.additionalInfo = additionalInfo;
        return this;
    }
    @JsonProperty("code")
    public OperatingStatusCodeEnum code;
    public OperatingStatus withCode(OperatingStatusCodeEnum code) {
        this.code = code;
        return this;
    }
}