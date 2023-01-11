package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksLayersVolumeAnnotationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=annotationId")
    public String annotationId;
    public BooksLayersVolumeAnnotationsGetPathParams withAnnotationId(String annotationId) {
        this.annotationId = annotationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=layerId")
    public String layerId;
    public BooksLayersVolumeAnnotationsGetPathParams withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volumeId")
    public String volumeId;
    public BooksLayersVolumeAnnotationsGetPathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}