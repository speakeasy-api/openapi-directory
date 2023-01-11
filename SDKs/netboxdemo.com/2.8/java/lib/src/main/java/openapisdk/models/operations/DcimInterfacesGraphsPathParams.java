package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimInterfacesGraphsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DcimInterfacesGraphsPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}