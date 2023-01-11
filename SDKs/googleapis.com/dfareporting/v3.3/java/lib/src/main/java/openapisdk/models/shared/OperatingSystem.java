package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OperatingSystem
 * Contains information about an operating system that can be targeted by ads.
**/
public class OperatingSystem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dartId")
    public String dartId;
    public OperatingSystem withDartId(String dartId) {
        this.dartId = dartId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desktop")
    public Boolean desktop;
    public OperatingSystem withDesktop(Boolean desktop) {
        this.desktop = desktop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public OperatingSystem withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobile")
    public Boolean mobile;
    public OperatingSystem withMobile(Boolean mobile) {
        this.mobile = mobile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OperatingSystem withName(String name) {
        this.name = name;
        return this;
    }
}