package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetQuoteIdFromInternalId200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internal-id")
    public Long internalId;
    public GetQuoteIdFromInternalId200ApplicationJson withInternalId(Long internalId) {
        this.internalId = internalId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("public-id")
    public Long publicId;
    public GetQuoteIdFromInternalId200ApplicationJson withPublicId(Long publicId) {
        this.publicId = publicId;
        return this;
    }
}