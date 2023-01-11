package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSsidHotspot20RequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public String[] domains;
    public UpdateNetworkWirelessSsidHotspot20RequestBody withDomains(String[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkWirelessSsidHotspot20RequestBody withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mccMncs")
    public UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs[] mccMncs;
    public UpdateNetworkWirelessSsidHotspot20RequestBody withMccMncs(UpdateNetworkWirelessSsidHotspot20RequestBodyMccMncs[] mccMncs) {
        this.mccMncs = mccMncs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("naiRealms")
    public UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms[] naiRealms;
    public UpdateNetworkWirelessSsidHotspot20RequestBody withNaiRealms(UpdateNetworkWirelessSsidHotspot20RequestBodyNaiRealms[] naiRealms) {
        this.naiRealms = naiRealms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkAccessType")
    public UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum networkAccessType;
    public UpdateNetworkWirelessSsidHotspot20RequestBody withNetworkAccessType(UpdateNetworkWirelessSsidHotspot20RequestBodyNetworkAccessTypeEnum networkAccessType) {
        this.networkAccessType = networkAccessType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operator")
    public UpdateNetworkWirelessSsidHotspot20RequestBodyOperator operator;
    public UpdateNetworkWirelessSsidHotspot20RequestBody withOperator(UpdateNetworkWirelessSsidHotspot20RequestBodyOperator operator) {
        this.operator = operator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roamConsortOis")
    public String[] roamConsortOis;
    public UpdateNetworkWirelessSsidHotspot20RequestBody withRoamConsortOis(String[] roamConsortOis) {
        this.roamConsortOis = roamConsortOis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("venue")
    public UpdateNetworkWirelessSsidHotspot20RequestBodyVenue venue;
    public UpdateNetworkWirelessSsidHotspot20RequestBody withVenue(UpdateNetworkWirelessSsidHotspot20RequestBodyVenue venue) {
        this.venue = venue;
        return this;
    }
}