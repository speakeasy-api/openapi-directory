package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfaceTemplatesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableInterfaceTemplateInput request;
    public DcimInterfaceTemplatesCreateRequest withRequest(openapisdk.models.shared.WritableInterfaceTemplateInput request) {
        this.request = request;
        return this;
    }
}