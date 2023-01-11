package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConversionsBatchUpdateResponse
 * Update Conversions Response.
**/
public class ConversionsBatchUpdateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasFailures")
    public Boolean hasFailures;
    public ConversionsBatchUpdateResponse withHasFailures(Boolean hasFailures) {
        this.hasFailures = hasFailures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ConversionsBatchUpdateResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ConversionStatus[] status;
    public ConversionsBatchUpdateResponse withStatus(ConversionStatus[] status) {
        this.status = status;
        return this;
    }
}