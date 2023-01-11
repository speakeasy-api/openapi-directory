package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeomarksGeomarkIdFileFormatExtensionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=srid")
    public Long srid;
    public GetGeomarksGeomarkIdFileFormatExtensionQueryParams withSrid(Long srid) {
        this.srid = srid;
        return this;
    }
}