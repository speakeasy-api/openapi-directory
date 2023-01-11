package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudAssetV1p4beta1IdentityList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupEdges")
    public GoogleCloudAssetV1p4beta1Edge[] groupEdges;
    public GoogleCloudAssetV1p4beta1IdentityList withGroupEdges(GoogleCloudAssetV1p4beta1Edge[] groupEdges) {
        this.groupEdges = groupEdges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identities")
    public GoogleCloudAssetV1p4beta1Identity[] identities;
    public GoogleCloudAssetV1p4beta1IdentityList withIdentities(GoogleCloudAssetV1p4beta1Identity[] identities) {
        this.identities = identities;
        return this;
    }
}