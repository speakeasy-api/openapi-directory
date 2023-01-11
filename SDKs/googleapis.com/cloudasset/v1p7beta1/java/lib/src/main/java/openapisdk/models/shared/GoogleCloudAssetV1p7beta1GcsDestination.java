package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssetV1p7beta1GcsDestination
 * A Cloud Storage location.
**/
public class GoogleCloudAssetV1p7beta1GcsDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public GoogleCloudAssetV1p7beta1GcsDestination withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uriPrefix")
    public String uriPrefix;
    public GoogleCloudAssetV1p7beta1GcsDestination withUriPrefix(String uriPrefix) {
        this.uriPrefix = uriPrefix;
        return this;
    }
}