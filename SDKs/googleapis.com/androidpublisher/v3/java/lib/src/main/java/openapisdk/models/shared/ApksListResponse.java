package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApksListResponse
 * Response listing all APKs.
**/
public class ApksListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apks")
    public Apk[] apks;
    public ApksListResponse withApks(Apk[] apks) {
        this.apks = apks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ApksListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}