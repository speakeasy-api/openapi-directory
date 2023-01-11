package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeFieldValuesListResponse
 * Creative Field Value List Response
**/
public class CreativeFieldValuesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeFieldValues")
    public CreativeFieldValue[] creativeFieldValues;
    public CreativeFieldValuesListResponse withCreativeFieldValues(CreativeFieldValue[] creativeFieldValues) {
        this.creativeFieldValues = creativeFieldValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CreativeFieldValuesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public CreativeFieldValuesListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}