package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDatabaseInstancesResponse
 * The response from the ListDatabaseInstances method.
**/
public class ListDatabaseInstancesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instances")
    public DatabaseInstance[] instances;
    public ListDatabaseInstancesResponse withInstances(DatabaseInstance[] instances) {
        this.instances = instances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDatabaseInstancesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}