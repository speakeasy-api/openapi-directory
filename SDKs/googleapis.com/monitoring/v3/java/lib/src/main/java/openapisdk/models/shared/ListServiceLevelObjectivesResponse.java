package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListServiceLevelObjectivesResponse
 * The ListServiceLevelObjectives response.
**/
public class ListServiceLevelObjectivesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListServiceLevelObjectivesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceLevelObjectives")
    public ServiceLevelObjective[] serviceLevelObjectives;
    public ListServiceLevelObjectivesResponse withServiceLevelObjectives(ServiceLevelObjective[] serviceLevelObjectives) {
        this.serviceLevelObjectives = serviceLevelObjectives;
        return this;
    }
}