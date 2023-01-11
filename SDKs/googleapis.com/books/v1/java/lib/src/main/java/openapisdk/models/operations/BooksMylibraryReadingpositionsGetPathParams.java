package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksMylibraryReadingpositionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volumeId")
    public String volumeId;
    public BooksMylibraryReadingpositionsGetPathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}