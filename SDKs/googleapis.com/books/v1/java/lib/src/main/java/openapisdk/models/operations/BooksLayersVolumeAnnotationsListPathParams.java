package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksLayersVolumeAnnotationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=layerId")
    public String layerId;
    public BooksLayersVolumeAnnotationsListPathParams withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volumeId")
    public String volumeId;
    public BooksLayersVolumeAnnotationsListPathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}