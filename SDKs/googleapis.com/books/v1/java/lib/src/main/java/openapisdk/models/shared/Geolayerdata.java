package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Geolayerdata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("common")
    public GeolayerdataCommon common;
    public Geolayerdata withCommon(GeolayerdataCommon common) {
        this.common = common;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("geo")
    public GeolayerdataGeo geo;
    public Geolayerdata withGeo(GeolayerdataGeo geo) {
        this.geo = geo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Geolayerdata withKind(String kind) {
        this.kind = kind;
        return this;
    }
}