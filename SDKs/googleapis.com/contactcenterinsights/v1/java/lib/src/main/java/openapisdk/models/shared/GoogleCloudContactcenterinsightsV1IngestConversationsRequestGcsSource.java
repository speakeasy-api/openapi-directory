package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource
 * Configuration for Cloud Storage bucket sources.
**/
public class GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketUri")
    public String bucketUri;
    public GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource withBucketUri(String bucketUri) {
        this.bucketUri = bucketUri;
        return this;
    }
}