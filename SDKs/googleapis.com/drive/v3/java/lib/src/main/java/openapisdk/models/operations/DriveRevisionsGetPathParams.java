package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRevisionsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveRevisionsGetPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=revisionId")
    public String revisionId;
    public DriveRevisionsGetPathParams withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}