package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRevisionsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fileId")
    public String fileId;
    public DriveRevisionsDeletePathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=revisionId")
    public String revisionId;
    public DriveRevisionsDeletePathParams withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
}