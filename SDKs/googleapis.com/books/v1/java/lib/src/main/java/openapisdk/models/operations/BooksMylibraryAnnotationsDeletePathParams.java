package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksMylibraryAnnotationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=annotationId")
    public String annotationId;
    public BooksMylibraryAnnotationsDeletePathParams withAnnotationId(String annotationId) {
        this.annotationId = annotationId;
        return this;
    }
}