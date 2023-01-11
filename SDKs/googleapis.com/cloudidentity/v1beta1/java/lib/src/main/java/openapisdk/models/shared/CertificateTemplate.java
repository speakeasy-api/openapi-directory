package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CertificateTemplate
 * CertificateTemplate (v3 Extension in X.509).
**/
public class CertificateTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CertificateTemplate withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("majorVersion")
    public Integer majorVersion;
    public CertificateTemplate withMajorVersion(Integer majorVersion) {
        this.majorVersion = majorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minorVersion")
    public Integer minorVersion;
    public CertificateTemplate withMinorVersion(Integer minorVersion) {
        this.minorVersion = minorVersion;
        return this;
    }
}