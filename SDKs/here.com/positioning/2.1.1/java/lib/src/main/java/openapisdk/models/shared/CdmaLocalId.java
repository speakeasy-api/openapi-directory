package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CdmaLocalId
 * Local identification parameters of CDMA serving cell
**/
public class CdmaLocalId {
    @JsonProperty("channel")
    public Long channel;
    public CdmaLocalId withChannel(Long channel) {
        this.channel = channel;
        return this;
    }
    @JsonProperty("pnOffset")
    public Long pnOffset;
    public CdmaLocalId withPnOffset(Long pnOffset) {
        this.pnOffset = pnOffset;
        return this;
    }
}