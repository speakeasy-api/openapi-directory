package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetFundingsResponse
 * List Users Response Object
**/
public class GetFundingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public FundingAudit[] content;
    public GetFundingsResponse withContent(FundingAudit[] content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public Object[] links;
    public GetFundingsResponse withLinks(Object[] links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public Object page;
    public GetFundingsResponse withPage(Object page) {
        this.page = page;
        return this;
    }
}