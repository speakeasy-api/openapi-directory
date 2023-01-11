package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimSitesUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimSitesUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}