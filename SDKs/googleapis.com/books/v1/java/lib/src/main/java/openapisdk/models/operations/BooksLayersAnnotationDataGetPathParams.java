package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksLayersAnnotationDataGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=annotationDataId")
    public String annotationDataId;
    public BooksLayersAnnotationDataGetPathParams withAnnotationDataId(String annotationDataId) {
        this.annotationDataId = annotationDataId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=layerId")
    public String layerId;
    public BooksLayersAnnotationDataGetPathParams withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volumeId")
    public String volumeId;
    public BooksLayersAnnotationDataGetPathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}