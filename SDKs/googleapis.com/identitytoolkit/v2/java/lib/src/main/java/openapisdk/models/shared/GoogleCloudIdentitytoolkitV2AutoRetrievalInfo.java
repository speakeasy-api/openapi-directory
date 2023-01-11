package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitV2AutoRetrievalInfo
 * The information required to auto-retrieve an SMS.
**/
public class GoogleCloudIdentitytoolkitV2AutoRetrievalInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appSignatureHash")
    public String appSignatureHash;
    public GoogleCloudIdentitytoolkitV2AutoRetrievalInfo withAppSignatureHash(String appSignatureHash) {
        this.appSignatureHash = appSignatureHash;
        return this;
    }
}