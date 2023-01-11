package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListExportsResponse
 * The exports for a matter.
**/
public class ListExportsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exports")
    public Export[] exports;
    public ListExportsResponse withExports(Export[] exports) {
        this.exports = exports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListExportsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}