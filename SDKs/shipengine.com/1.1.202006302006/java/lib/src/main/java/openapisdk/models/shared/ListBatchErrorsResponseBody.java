package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListBatchErrorsResponseBody
 * A batch errors response body
**/
public class ListBatchErrorsResponseBody {
    @JsonProperty("errors")
    public BatchResponseError[] errors;
    public ListBatchErrorsResponseBody withErrors(BatchResponseError[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("links")
    public ListBatchErrorsResponseBodyPaginationLink links;
    public ListBatchErrorsResponseBody withLinks(ListBatchErrorsResponseBodyPaginationLink links) {
        this.links = links;
        return this;
    }
}