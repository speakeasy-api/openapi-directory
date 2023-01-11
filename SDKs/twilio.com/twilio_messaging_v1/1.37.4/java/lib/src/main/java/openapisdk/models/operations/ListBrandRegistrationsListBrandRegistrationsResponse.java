package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBrandRegistrationsListBrandRegistrationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.MessagingV1BrandRegistrations[] data;
    public ListBrandRegistrationsListBrandRegistrationsResponse withData(openapisdk.models.shared.MessagingV1BrandRegistrations[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListBrandRegistrationsListBrandRegistrationsResponseMeta meta;
    public ListBrandRegistrationsListBrandRegistrationsResponse withMeta(ListBrandRegistrationsListBrandRegistrationsResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}