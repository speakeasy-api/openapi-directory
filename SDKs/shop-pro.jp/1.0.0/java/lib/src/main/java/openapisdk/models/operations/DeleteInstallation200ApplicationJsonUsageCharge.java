package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteInstallation200ApplicationJsonUsageCharge
 * （従量課金の場合）従量課金アンインストール情報
**/
public class DeleteInstallation200ApplicationJsonUsageCharge {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_token")
    public String apiToken;
    public DeleteInstallation200ApplicationJsonUsageCharge withApiToken(String apiToken) {
        this.apiToken = apiToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closing_on")
    public Long closingOn;
    public DeleteInstallation200ApplicationJsonUsageCharge withClosingOn(Long closingOn) {
        this.closingOn = closingOn;
        return this;
    }
}