package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RetrieveDistributionLinksResponseResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elements")
    public RetrieveDistributionLinksResponseResultElements[] elements;
    public RetrieveDistributionLinksResponseResult withElements(RetrieveDistributionLinksResponseResultElements[] elements) {
        this.elements = elements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPage")
    public Object nextPage;
    public RetrieveDistributionLinksResponseResult withNextPage(Object nextPage) {
        this.nextPage = nextPage;
        return this;
    }
}