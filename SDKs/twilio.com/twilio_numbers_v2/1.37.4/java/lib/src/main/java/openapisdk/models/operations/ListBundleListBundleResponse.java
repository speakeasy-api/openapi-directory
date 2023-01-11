package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBundleListBundleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListBundleListBundleResponseMeta meta;
    public ListBundleListBundleResponse withMeta(ListBundleListBundleResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceBundle[] results;
    public ListBundleListBundleResponse withResults(openapisdk.models.shared.NumbersV2RegulatoryComplianceBundle[] results) {
        this.results = results;
        return this;
    }
}