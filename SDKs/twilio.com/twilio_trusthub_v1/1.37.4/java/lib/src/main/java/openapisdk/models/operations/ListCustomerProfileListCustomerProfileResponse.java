package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCustomerProfileListCustomerProfileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListCustomerProfileListCustomerProfileResponseMeta meta;
    public ListCustomerProfileListCustomerProfileResponse withMeta(ListCustomerProfileListCustomerProfileResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.TrusthubV1CustomerProfile[] results;
    public ListCustomerProfileListCustomerProfileResponse withResults(openapisdk.models.shared.TrusthubV1CustomerProfile[] results) {
        this.results = results;
        return this;
    }
}