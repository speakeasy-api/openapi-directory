package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimFrontPortTemplatesCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableFrontPortTemplateInput request;
    public DcimFrontPortTemplatesCreateRequest withRequest(openapisdk.models.shared.WritableFrontPortTemplateInput request) {
        this.request = request;
        return this;
    }
}