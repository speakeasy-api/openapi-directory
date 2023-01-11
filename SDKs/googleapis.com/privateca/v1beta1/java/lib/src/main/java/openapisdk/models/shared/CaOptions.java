package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CaOptions
 * Describes values that are relevant in a CA certificate.
**/
public class CaOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCa")
    public Boolean isCa;
    public CaOptions withIsCa(Boolean isCa) {
        this.isCa = isCa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxIssuerPathLength")
    public Integer maxIssuerPathLength;
    public CaOptions withMaxIssuerPathLength(Integer maxIssuerPathLength) {
        this.maxIssuerPathLength = maxIssuerPathLength;
        return this;
    }
}