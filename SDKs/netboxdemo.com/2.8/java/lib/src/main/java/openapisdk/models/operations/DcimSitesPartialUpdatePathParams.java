package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimSitesPartialUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimSitesPartialUpdatePathParams withId(Long id) {
        this.id = id;
        return this;
    }
}