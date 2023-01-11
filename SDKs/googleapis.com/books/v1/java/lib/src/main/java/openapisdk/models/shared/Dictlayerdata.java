package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Dictlayerdata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("common")
    public DictlayerdataCommon common;
    public Dictlayerdata withCommon(DictlayerdataCommon common) {
        this.common = common;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dict")
    public DictlayerdataDict dict;
    public Dictlayerdata withDict(DictlayerdataDict dict) {
        this.dict = dict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Dictlayerdata withKind(String kind) {
        this.kind = kind;
        return this;
    }
}