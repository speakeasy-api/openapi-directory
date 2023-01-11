package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCertificatesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetCertificatesIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}