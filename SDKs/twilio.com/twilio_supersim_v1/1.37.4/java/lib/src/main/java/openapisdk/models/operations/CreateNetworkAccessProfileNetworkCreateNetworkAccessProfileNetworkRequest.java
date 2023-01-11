package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest {
    @SpeakeasyMetadata("form:name=Network")
    public String network;
    public CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest withNetwork(String network) {
        this.network = network;
        return this;
    }
}