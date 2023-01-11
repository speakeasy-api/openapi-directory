package openapisdk.models.operations;



public class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyResponse {
    public String contentType;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}