package openapisdk.models.operations;



public class GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyResponse {
    public String contentType;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Policy policy;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyResponse withPolicy(openapisdk.models.shared.Policy policy) {
        this.policy = policy;
        return this;
    }
    public Long statusCode;
    public GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}