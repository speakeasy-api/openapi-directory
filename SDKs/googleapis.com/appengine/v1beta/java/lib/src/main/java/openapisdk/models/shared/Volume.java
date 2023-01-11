package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Volume
 * Volumes mounted within the app container. Only applicable in the App Engine flexible environment.
**/
public class Volume {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Volume withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sizeGb")
    public Double sizeGb;
    public Volume withSizeGb(Double sizeGb) {
        this.sizeGb = sizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumeType")
    public String volumeType;
    public Volume withVolumeType(String volumeType) {
        this.volumeType = volumeType;
        return this;
    }
}