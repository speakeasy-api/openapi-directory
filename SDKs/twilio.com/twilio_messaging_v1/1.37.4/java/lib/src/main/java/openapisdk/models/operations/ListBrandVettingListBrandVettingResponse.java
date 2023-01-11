package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBrandVettingListBrandVettingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.MessagingV1BrandRegistrationsBrandVetting[] data;
    public ListBrandVettingListBrandVettingResponse withData(openapisdk.models.shared.MessagingV1BrandRegistrationsBrandVetting[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListBrandVettingListBrandVettingResponseMeta meta;
    public ListBrandVettingListBrandVettingResponse withMeta(ListBrandVettingListBrandVettingResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}