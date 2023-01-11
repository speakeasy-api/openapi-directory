package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBundleCopyListBundleCopyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListBundleCopyListBundleCopyResponseMeta meta;
    public ListBundleCopyListBundleCopyResponse withMeta(ListBundleCopyListBundleCopyResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleBundleCopy[] results;
    public ListBundleCopyListBundleCopyResponse withResults(openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleBundleCopy[] results) {
        this.results = results;
        return this;
    }
}