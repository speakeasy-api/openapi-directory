package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeomarksGeomarkIdPointFileFormatExtensionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=srid")
    public Long srid;
    public GetGeomarksGeomarkIdPointFileFormatExtensionQueryParams withSrid(Long srid) {
        this.srid = srid;
        return this;
    }
}