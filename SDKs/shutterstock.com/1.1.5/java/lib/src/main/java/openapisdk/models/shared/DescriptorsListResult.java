package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescriptorsListResult
 * List Descriptors results
**/
public class DescriptorsListResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Descriptors[] data;
    public DescriptorsListResult withData(Descriptors[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Long page;
    public DescriptorsListResult withPage(Long page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_page")
    public Long perPage;
    public DescriptorsListResult withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}