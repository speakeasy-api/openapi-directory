package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPretargetingConfigsResponse
 * A response containing pretargeting configurations.
**/
public class ListPretargetingConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListPretargetingConfigsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pretargetingConfigs")
    public PretargetingConfig[] pretargetingConfigs;
    public ListPretargetingConfigsResponse withPretargetingConfigs(PretargetingConfig[] pretargetingConfigs) {
        this.pretargetingConfigs = pretargetingConfigs;
        return this;
    }
}