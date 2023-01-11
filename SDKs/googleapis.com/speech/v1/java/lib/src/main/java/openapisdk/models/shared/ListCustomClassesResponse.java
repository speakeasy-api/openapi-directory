package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCustomClassesResponse
 * Message returned to the client by the `ListCustomClasses` method.
**/
public class ListCustomClassesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customClasses")
    public CustomClass[] customClasses;
    public ListCustomClassesResponse withCustomClasses(CustomClass[] customClasses) {
        this.customClasses = customClasses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCustomClassesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}