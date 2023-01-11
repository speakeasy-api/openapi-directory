package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAllAccounts200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_embedded")
    public openapisdk.models.shared.GetAllAccountResponse[] embedded;
    public GetAllAccounts200ApplicationJson withEmbedded(openapisdk.models.shared.GetAllAccountResponse[] embedded) {
        this.embedded = embedded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public GetAllAccounts200ApplicationJsonLinks links;
    public GetAllAccounts200ApplicationJson withLinks(GetAllAccounts200ApplicationJsonLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_number")
    public Long pageNumber;
    public GetAllAccounts200ApplicationJson withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page_size")
    public Long pageSize;
    public GetAllAccounts200ApplicationJson withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}