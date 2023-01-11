package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetRemarketingTagResponse
 * Response for a request to get remarketing tag.
**/
public class GetRemarketingTagResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snippet")
    public String snippet;
    public GetRemarketingTagResponse withSnippet(String snippet) {
        this.snippet = snippet;
        return this;
    }
}