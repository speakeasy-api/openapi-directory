package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntersectionsIntersectionIdOutputFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outputSRS")
    public Long outputSRS;
    public GetIntersectionsIntersectionIdOutputFormatQueryParams withOutputSrs(Long outputSRS) {
        this.outputSRS = outputSRS;
        return this;
    }
}