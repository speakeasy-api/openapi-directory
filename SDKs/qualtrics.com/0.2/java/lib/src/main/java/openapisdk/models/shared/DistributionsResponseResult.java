package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DistributionsResponseResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elements")
    public DistributionsResponseResultElements[] elements;
    public DistributionsResponseResult withElements(DistributionsResponseResultElements[] elements) {
        this.elements = elements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public Object nextPage;
    public DistributionsResponseResult withNextPage(Object nextPage) {
        this.nextPage = nextPage;
        return this;
    }
}