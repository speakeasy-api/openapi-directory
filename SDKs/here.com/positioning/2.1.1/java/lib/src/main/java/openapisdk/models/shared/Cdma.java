package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Cdma
 * CDMA measurement
**/
public class Cdma {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseLat")
    public Double baseLat;
    public Cdma withBaseLat(Double baseLat) {
        this.baseLat = baseLat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseLng")
    public Double baseLng;
    public Cdma withBaseLng(Double baseLng) {
        this.baseLng = baseLng;
        return this;
    }
    @JsonProperty("bsid")
    public Long bsid;
    public Cdma withBsid(Long bsid) {
        this.bsid = bsid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localId")
    public CdmaLocalId localId;
    public Cdma withLocalId(CdmaLocalId localId) {
        this.localId = localId;
        return this;
    }
    @JsonProperty("nid")
    public Long nid;
    public Cdma withNid(Long nid) {
        this.nid = nid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nmr")
    public CdmaNmr[] nmr;
    public Cdma withNmr(CdmaNmr[] nmr) {
        this.nmr = nmr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pilotPower")
    public Long pilotPower;
    public Cdma withPilotPower(Long pilotPower) {
        this.pilotPower = pilotPower;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rz")
    public Long rz;
    public Cdma withRz(Long rz) {
        this.rz = rz;
        return this;
    }
    @JsonProperty("sid")
    public Long sid;
    public Cdma withSid(Long sid) {
        this.sid = sid;
        return this;
    }
}