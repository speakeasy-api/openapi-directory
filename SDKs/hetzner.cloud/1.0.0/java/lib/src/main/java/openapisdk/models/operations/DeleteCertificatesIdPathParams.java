package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteCertificatesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DeleteCertificatesIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}