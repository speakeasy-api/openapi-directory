package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilesVersionDetailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=file_id")
    public String fileId;
    public FilesVersionDetailPathParams withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version_id")
    public String versionId;
    public FilesVersionDetailPathParams withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}