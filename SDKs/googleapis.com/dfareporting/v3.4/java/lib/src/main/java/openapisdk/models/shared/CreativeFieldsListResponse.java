package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeFieldsListResponse
 * Creative Field List Response
**/
public class CreativeFieldsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeFields")
    public CreativeField[] creativeFields;
    public CreativeFieldsListResponse withCreativeFields(CreativeField[] creativeFields) {
        this.creativeFields = creativeFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CreativeFieldsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public CreativeFieldsListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}