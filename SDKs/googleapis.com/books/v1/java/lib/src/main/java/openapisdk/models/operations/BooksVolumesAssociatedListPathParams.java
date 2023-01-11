package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksVolumesAssociatedListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volumeId")
    public String volumeId;
    public BooksVolumesAssociatedListPathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}