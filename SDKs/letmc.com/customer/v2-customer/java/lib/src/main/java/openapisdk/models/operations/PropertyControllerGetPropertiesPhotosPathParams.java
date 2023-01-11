package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PropertyControllerGetPropertiesPhotosPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=propertyID")
    public String propertyID;
    public PropertyControllerGetPropertiesPhotosPathParams withPropertyId(String propertyID) {
        this.propertyID = propertyID;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shortName")
    public String shortName;
    public PropertyControllerGetPropertiesPhotosPathParams withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}