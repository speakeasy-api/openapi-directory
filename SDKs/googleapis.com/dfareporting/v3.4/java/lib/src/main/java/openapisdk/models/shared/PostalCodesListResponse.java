package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostalCodesListResponse
 * Postal Code List Response
**/
public class PostalCodesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PostalCodesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postalCodes")
    public PostalCode[] postalCodes;
    public PostalCodesListResponse withPostalCodes(PostalCode[] postalCodes) {
        this.postalCodes = postalCodes;
        return this;
    }
}