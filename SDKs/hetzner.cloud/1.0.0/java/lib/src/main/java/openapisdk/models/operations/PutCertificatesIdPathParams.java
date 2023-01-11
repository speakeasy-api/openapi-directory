package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutCertificatesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public PutCertificatesIdPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}