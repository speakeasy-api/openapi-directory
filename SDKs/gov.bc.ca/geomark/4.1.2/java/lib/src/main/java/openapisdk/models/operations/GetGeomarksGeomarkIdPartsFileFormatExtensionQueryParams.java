package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeomarksGeomarkIdPartsFileFormatExtensionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=srid")
    public Long srid;
    public GetGeomarksGeomarkIdPartsFileFormatExtensionQueryParams withSrid(Long srid) {
        this.srid = srid;
        return this;
    }
}