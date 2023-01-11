package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileFormatExtension")
    public GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum fileFormatExtension;
    public GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams withFileFormatExtension(GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum fileFormatExtension) {
        this.fileFormatExtension = fileFormatExtension;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=geomarkId")
    public String geomarkId;
    public GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams withGeomarkId(String geomarkId) {
        this.geomarkId = geomarkId;
        return this;
    }
}