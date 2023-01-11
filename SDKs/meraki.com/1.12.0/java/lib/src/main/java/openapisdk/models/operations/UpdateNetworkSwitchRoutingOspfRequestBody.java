package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchRoutingOspfRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("areas")
    public UpdateNetworkSwitchRoutingOspfRequestBodyAreas[] areas;
    public UpdateNetworkSwitchRoutingOspfRequestBody withAreas(UpdateNetworkSwitchRoutingOspfRequestBodyAreas[] areas) {
        this.areas = areas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deadTimerInSeconds")
    public Long deadTimerInSeconds;
    public UpdateNetworkSwitchRoutingOspfRequestBody withDeadTimerInSeconds(Long deadTimerInSeconds) {
        this.deadTimerInSeconds = deadTimerInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkSwitchRoutingOspfRequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("helloTimerInSeconds")
    public Long helloTimerInSeconds;
    public UpdateNetworkSwitchRoutingOspfRequestBody withHelloTimerInSeconds(Long helloTimerInSeconds) {
        this.helloTimerInSeconds = helloTimerInSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("md5AuthenticationEnabled")
    public Boolean md5AuthenticationEnabled;
    public UpdateNetworkSwitchRoutingOspfRequestBody withMd5AuthenticationEnabled(Boolean md5AuthenticationEnabled) {
        this.md5AuthenticationEnabled = md5AuthenticationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("md5AuthenticationKey")
    public UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey md5AuthenticationKey;
    public UpdateNetworkSwitchRoutingOspfRequestBody withMd5AuthenticationKey(UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey md5AuthenticationKey) {
        this.md5AuthenticationKey = md5AuthenticationKey;
        return this;
    }
}