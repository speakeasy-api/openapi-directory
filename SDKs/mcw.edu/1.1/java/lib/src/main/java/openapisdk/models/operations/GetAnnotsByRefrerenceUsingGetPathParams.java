package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAnnotsByRefrerenceUsingGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=refRgdId")
    public Integer refRgdId;
    public GetAnnotsByRefrerenceUsingGetPathParams withRefRgdId(Integer refRgdId) {
        this.refRgdId = refRgdId;
        return this;
    }
}