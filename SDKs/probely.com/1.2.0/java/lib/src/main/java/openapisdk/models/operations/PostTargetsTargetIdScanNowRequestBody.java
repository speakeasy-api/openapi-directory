package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostTargetsTargetIdScanNowRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scan_profile")
    public PostTargetsTargetIdScanNowRequestBodyScanProfileEnum scanProfile;
    public PostTargetsTargetIdScanNowRequestBody withScanProfile(PostTargetsTargetIdScanNowRequestBodyScanProfileEnum scanProfile) {
        this.scanProfile = scanProfile;
        return this;
    }
}