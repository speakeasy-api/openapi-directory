package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IssuingOptions
 * Options that affect all certificates issued by a CertificateAuthority.
**/
public class IssuingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeCaCertUrl")
    public Boolean includeCaCertUrl;
    public IssuingOptions withIncludeCaCertUrl(Boolean includeCaCertUrl) {
        this.includeCaCertUrl = includeCaCertUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeCrlAccessUrl")
    public Boolean includeCrlAccessUrl;
    public IssuingOptions withIncludeCrlAccessUrl(Boolean includeCrlAccessUrl) {
        this.includeCrlAccessUrl = includeCrlAccessUrl;
        return this;
    }
}