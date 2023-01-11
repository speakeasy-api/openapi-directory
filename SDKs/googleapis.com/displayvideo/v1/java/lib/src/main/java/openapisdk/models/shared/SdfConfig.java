package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SdfConfig
 * Structured Data File (SDF) related settings.
**/
public class SdfConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminEmail")
    public String adminEmail;
    public SdfConfig withAdminEmail(String adminEmail) {
        this.adminEmail = adminEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public SdfConfigVersionEnum version;
    public SdfConfig withVersion(SdfConfigVersionEnum version) {
        this.version = version;
        return this;
    }
}