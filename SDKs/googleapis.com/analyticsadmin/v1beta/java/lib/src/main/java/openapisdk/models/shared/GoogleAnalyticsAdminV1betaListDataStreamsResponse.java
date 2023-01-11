package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAnalyticsAdminV1betaListDataStreamsResponse
 * Response message for ListDataStreams RPC.
**/
public class GoogleAnalyticsAdminV1betaListDataStreamsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataStreams")
    public GoogleAnalyticsAdminV1betaDataStream[] dataStreams;
    public GoogleAnalyticsAdminV1betaListDataStreamsResponse withDataStreams(GoogleAnalyticsAdminV1betaDataStream[] dataStreams) {
        this.dataStreams = dataStreams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAnalyticsAdminV1betaListDataStreamsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}