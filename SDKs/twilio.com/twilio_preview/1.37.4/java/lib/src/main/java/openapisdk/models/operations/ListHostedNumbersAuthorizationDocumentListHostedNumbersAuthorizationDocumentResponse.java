package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("items")
    public openapisdk.models.shared.PreviewHostedNumbersAuthorizationDocument[] items;
    public ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse withItems(openapisdk.models.shared.PreviewHostedNumbersAuthorizationDocument[] items) {
        this.items = items;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta meta;
    public ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponse withMeta(ListHostedNumbersAuthorizationDocumentListHostedNumbersAuthorizationDocumentResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}