package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleIdentityAccesscontextmanagerV1IngressFrom
 * Defines the conditions under which an IngressPolicy matches a request. Conditions are based on information about the source of the request. The request must satisfy what is defined in `sources` AND identity related fields in order to match.
**/
public class GoogleIdentityAccesscontextmanagerV1IngressFrom {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identities")
    public String[] identities;
    public GoogleIdentityAccesscontextmanagerV1IngressFrom withIdentities(String[] identities) {
        this.identities = identities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityType")
    public GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum identityType;
    public GoogleIdentityAccesscontextmanagerV1IngressFrom withIdentityType(GoogleIdentityAccesscontextmanagerV1IngressFromIdentityTypeEnum identityType) {
        this.identityType = identityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sources")
    public GoogleIdentityAccesscontextmanagerV1IngressSource[] sources;
    public GoogleIdentityAccesscontextmanagerV1IngressFrom withSources(GoogleIdentityAccesscontextmanagerV1IngressSource[] sources) {
        this.sources = sources;
        return this;
    }
}