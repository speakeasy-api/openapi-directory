package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileFormatExtension")
    public GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum fileFormatExtension;
    public GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams withFileFormatExtension(GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum fileFormatExtension) {
        this.fileFormatExtension = fileFormatExtension;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=geomarkId")
    public String geomarkId;
    public GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams withGeomarkId(String geomarkId) {
        this.geomarkId = geomarkId;
        return this;
    }
}