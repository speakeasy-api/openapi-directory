package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksLayersAnnotationDataListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=layerId")
    public String layerId;
    public BooksLayersAnnotationDataListPathParams withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volumeId")
    public String volumeId;
    public BooksLayersAnnotationDataListPathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}