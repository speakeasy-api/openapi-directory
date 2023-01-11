package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeomarksGeomarkIdFeatureFileFormatExtensionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=srid")
    public Long srid;
    public GetGeomarksGeomarkIdFeatureFileFormatExtensionQueryParams withSrid(Long srid) {
        this.srid = srid;
        return this;
    }
}