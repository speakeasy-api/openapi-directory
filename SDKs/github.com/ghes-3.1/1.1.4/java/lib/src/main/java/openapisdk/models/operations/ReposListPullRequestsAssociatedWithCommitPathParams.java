package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListPullRequestsAssociatedWithCommitPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=commit_sha")
    public String commitSha;
    public ReposListPullRequestsAssociatedWithCommitPathParams withCommitSha(String commitSha) {
        this.commitSha = commitSha;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ReposListPullRequestsAssociatedWithCommitPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ReposListPullRequestsAssociatedWithCommitPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}