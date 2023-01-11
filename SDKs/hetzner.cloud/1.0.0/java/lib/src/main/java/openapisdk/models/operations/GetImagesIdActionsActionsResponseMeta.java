package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetImagesIdActionsActionsResponseMeta {
    @JsonProperty("pagination")
    public GetImagesIdActionsActionsResponseMetaPagination pagination;
    public GetImagesIdActionsActionsResponseMeta withPagination(GetImagesIdActionsActionsResponseMetaPagination pagination) {
        this.pagination = pagination;
        return this;
    }
}