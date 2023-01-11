package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BundlesListResponse
 * Response listing all app bundles.
**/
public class BundlesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundles")
    public Bundle[] bundles;
    public BundlesListResponse withBundles(Bundle[] bundles) {
        this.bundles = bundles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public BundlesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}