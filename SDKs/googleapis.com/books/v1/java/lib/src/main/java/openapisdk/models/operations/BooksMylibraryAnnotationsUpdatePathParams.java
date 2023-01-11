package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksMylibraryAnnotationsUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=annotationId")
    public String annotationId;
    public BooksMylibraryAnnotationsUpdatePathParams withAnnotationId(String annotationId) {
        this.annotationId = annotationId;
        return this;
    }
}