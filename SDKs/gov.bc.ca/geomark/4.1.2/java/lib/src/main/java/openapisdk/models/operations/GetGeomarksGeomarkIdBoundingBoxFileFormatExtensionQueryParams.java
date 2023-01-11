package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=srid")
    public Long srid;
    public GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams withSrid(Long srid) {
        this.srid = srid;
        return this;
    }
}