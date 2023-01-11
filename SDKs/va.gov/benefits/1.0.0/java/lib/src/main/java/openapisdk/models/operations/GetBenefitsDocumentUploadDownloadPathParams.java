package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBenefitsDocumentUploadDownloadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetBenefitsDocumentUploadDownloadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}