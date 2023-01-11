package openapisdk.models.operations;



public class GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse {
    public String contentType;
    public GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InitializeHubResponse initializeHubResponse;
    public GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse withInitializeHubResponse(openapisdk.models.shared.InitializeHubResponse initializeHubResponse) {
        this.initializeHubResponse = initializeHubResponse;
        return this;
    }
    public Long statusCode;
    public GkehubProjectsLocationsGlobalMembershipsInitializeHubResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}