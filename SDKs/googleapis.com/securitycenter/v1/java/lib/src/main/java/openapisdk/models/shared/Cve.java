package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Cve
 * CVE stands for Common Vulnerabilities and Exposures. More information: https://cve.mitre.org
**/
public class Cve {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cvssv3")
    public Cvssv3 cvssv3;
    public Cve withCvssv3(Cvssv3 cvssv3) {
        this.cvssv3 = cvssv3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Cve withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("references")
    public Reference[] references;
    public Cve withReferences(Reference[] references) {
        this.references = references;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upstreamFixAvailable")
    public Boolean upstreamFixAvailable;
    public Cve withUpstreamFixAvailable(Boolean upstreamFixAvailable) {
        this.upstreamFixAvailable = upstreamFixAvailable;
        return this;
    }
}