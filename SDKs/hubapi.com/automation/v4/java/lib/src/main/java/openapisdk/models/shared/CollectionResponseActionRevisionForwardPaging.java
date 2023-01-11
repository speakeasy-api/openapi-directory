package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CollectionResponseActionRevisionForwardPaging {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paging")
    public ForwardPaging paging;
    public CollectionResponseActionRevisionForwardPaging withPaging(ForwardPaging paging) {
        this.paging = paging;
        return this;
    }
    @JsonProperty("results")
    public ActionRevision[] results;
    public CollectionResponseActionRevisionForwardPaging withResults(ActionRevision[] results) {
        this.results = results;
        return this;
    }
}