package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Fingerprint
 * A set of properties that uniquely identify a given Docker image.
**/
public class Fingerprint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("v1Name")
    public String v1Name;
    public Fingerprint withV1Name(String v1Name) {
        this.v1Name = v1Name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("v2Blob")
    public String[] v2Blob;
    public Fingerprint withV2Blob(String[] v2Blob) {
        this.v2Blob = v2Blob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("v2Name")
    public String v2Name;
    public Fingerprint withV2Name(String v2Name) {
        this.v2Name = v2Name;
        return this;
    }
}