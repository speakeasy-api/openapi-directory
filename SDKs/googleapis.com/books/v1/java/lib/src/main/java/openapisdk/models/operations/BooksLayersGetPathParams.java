package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BooksLayersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=summaryId")
    public String summaryId;
    public BooksLayersGetPathParams withSummaryId(String summaryId) {
        this.summaryId = summaryId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=volumeId")
    public String volumeId;
    public BooksLayersGetPathParams withVolumeId(String volumeId) {
        this.volumeId = volumeId;
        return this;
    }
}