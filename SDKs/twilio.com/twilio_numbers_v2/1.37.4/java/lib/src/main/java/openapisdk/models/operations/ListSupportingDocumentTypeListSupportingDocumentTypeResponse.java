package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSupportingDocumentTypeListSupportingDocumentTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSupportingDocumentTypeListSupportingDocumentTypeResponseMeta meta;
    public ListSupportingDocumentTypeListSupportingDocumentTypeResponse withMeta(ListSupportingDocumentTypeListSupportingDocumentTypeResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supporting_document_types")
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocumentType[] supportingDocumentTypes;
    public ListSupportingDocumentTypeListSupportingDocumentTypeResponse withSupportingDocumentTypes(openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocumentType[] supportingDocumentTypes) {
        this.supportingDocumentTypes = supportingDocumentTypes;
        return this;
    }
}