package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PagespeedVersion
 * The Pagespeed Version object.
**/
public class PagespeedVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("major")
    public String major;
    public PagespeedVersion withMajor(String major) {
        this.major = major;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minor")
    public String minor;
    public PagespeedVersion withMinor(String minor) {
        this.minor = minor;
        return this;
    }
}