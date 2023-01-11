package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaImportUserEventsRequest
 * Request message for the ImportUserEvents request.
**/
public class GoogleCloudDiscoveryengineV1betaImportUserEventsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bigquerySource")
    public GoogleCloudDiscoveryengineV1betaBigQuerySource bigquerySource;
    public GoogleCloudDiscoveryengineV1betaImportUserEventsRequest withBigquerySource(GoogleCloudDiscoveryengineV1betaBigQuerySource bigquerySource) {
        this.bigquerySource = bigquerySource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorConfig")
    public GoogleCloudDiscoveryengineV1betaImportErrorConfig errorConfig;
    public GoogleCloudDiscoveryengineV1betaImportUserEventsRequest withErrorConfig(GoogleCloudDiscoveryengineV1betaImportErrorConfig errorConfig) {
        this.errorConfig = errorConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsSource")
    public GoogleCloudDiscoveryengineV1betaGcsSource gcsSource;
    public GoogleCloudDiscoveryengineV1betaImportUserEventsRequest withGcsSource(GoogleCloudDiscoveryengineV1betaGcsSource gcsSource) {
        this.gcsSource = gcsSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inlineSource")
    public GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource inlineSource;
    public GoogleCloudDiscoveryengineV1betaImportUserEventsRequest withInlineSource(GoogleCloudDiscoveryengineV1betaImportUserEventsRequestInlineSource inlineSource) {
        this.inlineSource = inlineSource;
        return this;
    }
}