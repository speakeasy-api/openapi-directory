package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBenefitsDocumentUploadStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetBenefitsDocumentUploadStatusPathParams withId(String id) {
        this.id = id;
        return this;
    }
}