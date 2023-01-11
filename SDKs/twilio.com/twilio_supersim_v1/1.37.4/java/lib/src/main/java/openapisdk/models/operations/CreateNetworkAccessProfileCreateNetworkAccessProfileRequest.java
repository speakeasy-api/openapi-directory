package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkAccessProfileCreateNetworkAccessProfileRequest {
    @SpeakeasyMetadata("form:name=Networks")
    public String[] networks;
    public CreateNetworkAccessProfileCreateNetworkAccessProfileRequest withNetworks(String[] networks) {
        this.networks = networks;
        return this;
    }
    @SpeakeasyMetadata("form:name=UniqueName")
    public String uniqueName;
    public CreateNetworkAccessProfileCreateNetworkAccessProfileRequest withUniqueName(String uniqueName) {
        this.uniqueName = uniqueName;
        return this;
    }
}