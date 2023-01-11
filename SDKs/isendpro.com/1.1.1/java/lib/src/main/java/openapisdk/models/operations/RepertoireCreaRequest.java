package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RepertoireCreaRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RepertoirEcreaterequest request;
    public RepertoireCreaRequest withRequest(openapisdk.models.shared.RepertoirEcreaterequest request) {
        this.request = request;
        return this;
    }
}