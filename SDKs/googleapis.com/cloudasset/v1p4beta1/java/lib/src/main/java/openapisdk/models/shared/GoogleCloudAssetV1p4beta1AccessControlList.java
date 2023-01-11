package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssetV1p4beta1AccessControlList
 * An access control list, derived from the above IAM policy binding, which contains a set of resources and accesses. May include one item from each set to compose an access control entry. NOTICE that there could be multiple access control lists for one IAM policy binding. The access control lists are created based on resource and access combinations. For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3; This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3]
**/
public class GoogleCloudAssetV1p4beta1AccessControlList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accesses")
    public GoogleCloudAssetV1p4beta1Access[] accesses;
    public GoogleCloudAssetV1p4beta1AccessControlList withAccesses(GoogleCloudAssetV1p4beta1Access[] accesses) {
        this.accesses = accesses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceEdges")
    public GoogleCloudAssetV1p4beta1Edge[] resourceEdges;
    public GoogleCloudAssetV1p4beta1AccessControlList withResourceEdges(GoogleCloudAssetV1p4beta1Edge[] resourceEdges) {
        this.resourceEdges = resourceEdges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public GoogleCloudAssetV1p4beta1Resource[] resources;
    public GoogleCloudAssetV1p4beta1AccessControlList withResources(GoogleCloudAssetV1p4beta1Resource[] resources) {
        this.resources = resources;
        return this;
    }
}