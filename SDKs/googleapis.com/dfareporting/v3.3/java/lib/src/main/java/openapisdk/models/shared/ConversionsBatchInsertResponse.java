package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConversionsBatchInsertResponse
 * Insert Conversions Response.
**/
public class ConversionsBatchInsertResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasFailures")
    public Boolean hasFailures;
    public ConversionsBatchInsertResponse withHasFailures(Boolean hasFailures) {
        this.hasFailures = hasFailures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ConversionsBatchInsertResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ConversionStatus[] status;
    public ConversionsBatchInsertResponse withStatus(ConversionStatus[] status) {
        this.status = status;
        return this;
    }
}