package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mcc")
    public String mcc;
    public UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs withMcc(String mcc) {
        this.mcc = mcc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mnc")
    public String mnc;
    public UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs withMnc(String mnc) {
        this.mnc = mnc;
        return this;
    }
}