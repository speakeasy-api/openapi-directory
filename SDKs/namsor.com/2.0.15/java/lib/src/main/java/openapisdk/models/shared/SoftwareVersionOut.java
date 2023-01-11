package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SoftwareVersionOut
 * The software version.
**/
public class SoftwareVersionOut {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softwareNameAndVersion")
    public String softwareNameAndVersion;
    public SoftwareVersionOut withSoftwareNameAndVersion(String softwareNameAndVersion) {
        this.softwareNameAndVersion = softwareNameAndVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("softwareVersion")
    public Integer[] softwareVersion;
    public SoftwareVersionOut withSoftwareVersion(Integer[] softwareVersion) {
        this.softwareVersion = softwareVersion;
        return this;
    }
}