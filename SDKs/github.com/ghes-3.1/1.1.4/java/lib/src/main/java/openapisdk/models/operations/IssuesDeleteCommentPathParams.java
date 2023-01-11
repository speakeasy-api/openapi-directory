package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssuesDeleteCommentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=comment_id")
    public Long commentId;
    public IssuesDeleteCommentPathParams withCommentId(Long commentId) {
        this.commentId = commentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public IssuesDeleteCommentPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public IssuesDeleteCommentPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}