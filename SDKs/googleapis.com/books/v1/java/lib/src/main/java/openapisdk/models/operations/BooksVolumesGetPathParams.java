package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksVolumesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volumeId")
    public String volumeId;
    public BooksVolumesGetPathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}