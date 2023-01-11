package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest
 * Request message for Import methods.
**/
public class GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bigquerySource")
    public GoogleCloudDiscoveryengineV1alphaBigQuerySource bigquerySource;
    public GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest withBigquerySource(GoogleCloudDiscoveryengineV1alphaBigQuerySource bigquerySource) {
        this.bigquerySource = bigquerySource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorConfig")
    public GoogleCloudDiscoveryengineV1alphaImportErrorConfig errorConfig;
    public GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest withErrorConfig(GoogleCloudDiscoveryengineV1alphaImportErrorConfig errorConfig) {
        this.errorConfig = errorConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsSource")
    public GoogleCloudDiscoveryengineV1alphaGcsSource gcsSource;
    public GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest withGcsSource(GoogleCloudDiscoveryengineV1alphaGcsSource gcsSource) {
        this.gcsSource = gcsSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inlineSource")
    public GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource inlineSource;
    public GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest withInlineSource(GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestInlineSource inlineSource) {
        this.inlineSource = inlineSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reconciliationMode")
    public GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum reconciliationMode;
    public GoogleCloudDiscoveryengineV1alphaImportDocumentsRequest withReconciliationMode(GoogleCloudDiscoveryengineV1alphaImportDocumentsRequestReconciliationModeEnum reconciliationMode) {
        this.reconciliationMode = reconciliationMode;
        return this;
    }
}