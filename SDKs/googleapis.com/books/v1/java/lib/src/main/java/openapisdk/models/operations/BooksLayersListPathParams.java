package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksLayersListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volumeId")
    public String volumeId;
    public BooksLayersListPathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}