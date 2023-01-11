package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Release
 * A Release is owned by a Version. A Release contains information about the release(s) of its parent version. This includes when the release began and ended, as well as what percentage it was released at. If the version is released again, or if the serving percentage changes, it will create another release under the version.
**/
public class Release {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fraction")
    public Double fraction;
    public Release withFraction(Double fraction) {
        this.fraction = fraction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fractionGroup")
    public String fractionGroup;
    public Release withFractionGroup(String fractionGroup) {
        this.fractionGroup = fractionGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Release withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serving")
    public Interval serving;
    public Release withServing(Interval serving) {
        this.serving = serving;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Release withVersion(String version) {
        this.version = version;
        return this;
    }
}