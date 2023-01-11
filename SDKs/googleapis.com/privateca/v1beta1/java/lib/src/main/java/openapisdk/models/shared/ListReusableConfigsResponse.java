package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListReusableConfigsResponse
 * Response message for CertificateAuthorityService.ListReusableConfigs.
**/
public class ListReusableConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListReusableConfigsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reusableConfigs")
    public ReusableConfig[] reusableConfigs;
    public ListReusableConfigsResponse withReusableConfigs(ReusableConfig[] reusableConfigs) {
        this.reusableConfigs = reusableConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListReusableConfigsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}