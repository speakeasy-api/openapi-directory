package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSupportingDocumentListSupportingDocumentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSupportingDocumentListSupportingDocumentResponseMeta meta;
    public ListSupportingDocumentListSupportingDocumentResponse withMeta(ListSupportingDocumentListSupportingDocumentResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocument[] results;
    public ListSupportingDocumentListSupportingDocumentResponse withResults(openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocument[] results) {
        this.results = results;
        return this;
    }
}