package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTrustProductListTrustProductResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListTrustProductListTrustProductResponseMeta meta;
    public ListTrustProductListTrustProductResponse withMeta(ListTrustProductListTrustProductResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.TrusthubV1TrustProduct[] results;
    public ListTrustProductListTrustProductResponse withResults(openapisdk.models.shared.TrusthubV1TrustProduct[] results) {
        this.results = results;
        return this;
    }
}