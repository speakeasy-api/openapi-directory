package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsDownloadArtifactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=archive_format")
    public String archiveFormat;
    public ActionsDownloadArtifactPathParams withArchiveFormat(String archiveFormat) {
        this.archiveFormat = archiveFormat;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifact_id")
    public Long artifactId;
    public ActionsDownloadArtifactPathParams withArtifactId(Long artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActionsDownloadArtifactPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActionsDownloadArtifactPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}