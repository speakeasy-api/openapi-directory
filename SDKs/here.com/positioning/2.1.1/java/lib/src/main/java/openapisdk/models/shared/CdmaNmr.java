package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CdmaNmr
 * CDMA Network measurement
**/
public class CdmaNmr {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bsid")
    public Long bsid;
    public CdmaNmr withBsid(Long bsid) {
        this.bsid = bsid;
        return this;
    }
    @JsonProperty("channel")
    public Long channel;
    public CdmaNmr withChannel(Long channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pilotPower")
    public Long pilotPower;
    public CdmaNmr withPilotPower(Long pilotPower) {
        this.pilotPower = pilotPower;
        return this;
    }
    @JsonProperty("pnOffset")
    public Long pnOffset;
    public CdmaNmr withPnOffset(Long pnOffset) {
        this.pnOffset = pnOffset;
        return this;
    }
}