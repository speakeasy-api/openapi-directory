package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainMappingSpec
 * The desired state of the Domain Mapping.
**/
public class DomainMappingSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateMode")
    public DomainMappingSpecCertificateModeEnum certificateMode;
    public DomainMappingSpec withCertificateMode(DomainMappingSpecCertificateModeEnum certificateMode) {
        this.certificateMode = certificateMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forceOverride")
    public Boolean forceOverride;
    public DomainMappingSpec withForceOverride(Boolean forceOverride) {
        this.forceOverride = forceOverride;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("routeName")
    public String routeName;
    public DomainMappingSpec withRouteName(String routeName) {
        this.routeName = routeName;
        return this;
    }
}