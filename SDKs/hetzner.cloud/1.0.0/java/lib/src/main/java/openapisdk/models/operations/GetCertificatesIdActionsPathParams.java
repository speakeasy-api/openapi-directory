package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCertificatesIdActionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetCertificatesIdActionsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}