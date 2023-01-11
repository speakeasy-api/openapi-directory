package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksMylibraryReadingpositionsSetPositionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volumeId")
    public String volumeId;
    public BooksMylibraryReadingpositionsSetPositionPathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}