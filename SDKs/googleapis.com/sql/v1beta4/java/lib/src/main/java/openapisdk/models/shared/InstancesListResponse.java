package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstancesListResponse
 * Database instances list response.
**/
public class InstancesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public DatabaseInstance[] items;
    public InstancesListResponse withItems(DatabaseInstance[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public InstancesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public InstancesListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public ApiWarning[] warnings;
    public InstancesListResponse withWarnings(ApiWarning[] warnings) {
        this.warnings = warnings;
        return this;
    }
}