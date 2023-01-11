package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetZipArchivePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=archiveKind")
    public openapisdk.models.shared.ArchiveKindEnum archiveKind;
    public GetZipArchivePathParams withArchiveKind(openapisdk.models.shared.ArchiveKindEnum archiveKind) {
        this.archiveKind = archiveKind;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commitId")
    public String commitId;
    public GetZipArchivePathParams withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
}