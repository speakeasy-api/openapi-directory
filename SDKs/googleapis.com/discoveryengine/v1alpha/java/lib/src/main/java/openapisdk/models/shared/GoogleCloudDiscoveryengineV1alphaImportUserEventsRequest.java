package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest
 * Request message for the ImportUserEvents request.
**/
public class GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bigquerySource")
    public GoogleCloudDiscoveryengineV1alphaBigQuerySource bigquerySource;
    public GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest withBigquerySource(GoogleCloudDiscoveryengineV1alphaBigQuerySource bigquerySource) {
        this.bigquerySource = bigquerySource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorConfig")
    public GoogleCloudDiscoveryengineV1alphaImportErrorConfig errorConfig;
    public GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest withErrorConfig(GoogleCloudDiscoveryengineV1alphaImportErrorConfig errorConfig) {
        this.errorConfig = errorConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsSource")
    public GoogleCloudDiscoveryengineV1alphaGcsSource gcsSource;
    public GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest withGcsSource(GoogleCloudDiscoveryengineV1alphaGcsSource gcsSource) {
        this.gcsSource = gcsSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inlineSource")
    public GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource inlineSource;
    public GoogleCloudDiscoveryengineV1alphaImportUserEventsRequest withInlineSource(GoogleCloudDiscoveryengineV1alphaImportUserEventsRequestInlineSource inlineSource) {
        this.inlineSource = inlineSource;
        return this;
    }
}