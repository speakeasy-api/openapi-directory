package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetPagesBuildPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=build_id")
    public Long buildId;
    public ReposGetPagesBuildPathParams withBuildId(Long buildId) {
        this.buildId = buildId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposGetPagesBuildPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposGetPagesBuildPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}