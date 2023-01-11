package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCertificatesIdActionsRetryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PostCertificatesIdActionsRetryPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}