package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddVideoTagsRequestBody {
    @JsonProperty("name")
    public String name;
    public AddVideoTagsRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Double page;
    public AddVideoTagsRequestBody withPage(Double page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_page")
    public Double perPage;
    public AddVideoTagsRequestBody withPerPage(Double perPage) {
        this.perPage = perPage;
        return this;
    }
}