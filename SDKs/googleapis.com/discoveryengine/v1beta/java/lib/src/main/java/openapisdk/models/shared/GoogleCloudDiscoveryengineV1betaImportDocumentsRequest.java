package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaImportDocumentsRequest
 * Request message for Import methods.
**/
public class GoogleCloudDiscoveryengineV1betaImportDocumentsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bigquerySource")
    public GoogleCloudDiscoveryengineV1betaBigQuerySource bigquerySource;
    public GoogleCloudDiscoveryengineV1betaImportDocumentsRequest withBigquerySource(GoogleCloudDiscoveryengineV1betaBigQuerySource bigquerySource) {
        this.bigquerySource = bigquerySource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorConfig")
    public GoogleCloudDiscoveryengineV1betaImportErrorConfig errorConfig;
    public GoogleCloudDiscoveryengineV1betaImportDocumentsRequest withErrorConfig(GoogleCloudDiscoveryengineV1betaImportErrorConfig errorConfig) {
        this.errorConfig = errorConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsSource")
    public GoogleCloudDiscoveryengineV1betaGcsSource gcsSource;
    public GoogleCloudDiscoveryengineV1betaImportDocumentsRequest withGcsSource(GoogleCloudDiscoveryengineV1betaGcsSource gcsSource) {
        this.gcsSource = gcsSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inlineSource")
    public GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource inlineSource;
    public GoogleCloudDiscoveryengineV1betaImportDocumentsRequest withInlineSource(GoogleCloudDiscoveryengineV1betaImportDocumentsRequestInlineSource inlineSource) {
        this.inlineSource = inlineSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reconciliationMode")
    public GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum reconciliationMode;
    public GoogleCloudDiscoveryengineV1betaImportDocumentsRequest withReconciliationMode(GoogleCloudDiscoveryengineV1betaImportDocumentsRequestReconciliationModeEnum reconciliationMode) {
        this.reconciliationMode = reconciliationMode;
        return this;
    }
}