package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFindingsResult
 * Result containing the Finding and its StateChange.
**/
public class ListFindingsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finding")
    public Finding finding;
    public ListFindingsResult withFinding(Finding finding) {
        this.finding = finding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource")
    public Resource resource;
    public ListFindingsResult withResource(Resource resource) {
        this.resource = resource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateChange")
    public ListFindingsResultStateChangeEnum stateChange;
    public ListFindingsResult withStateChange(ListFindingsResultStateChangeEnum stateChange) {
        this.stateChange = stateChange;
        return this;
    }
}