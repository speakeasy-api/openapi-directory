package openapisdk.models.shared;



public class Posts {
    public String body;
    public Posts withBody(String body) {
        this.body = body;
        return this;
    }
    public String bodyMarkdown;
    public Posts withBodyMarkdown(String bodyMarkdown) {
        this.bodyMarkdown = bodyMarkdown;
        return this;
    }
    public Long commentCount;
    public Posts withCommentCount(Long commentCount) {
        this.commentCount = commentCount;
        return this;
    }
    public Object[] comments;
    public Posts withComments(Object[] comments) {
        this.comments = comments;
        return this;
    }
    public Long creationDate;
    public Posts withCreationDate(Long creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    public Long downVoteCount;
    public Posts withDownVoteCount(Long downVoteCount) {
        this.downVoteCount = downVoteCount;
        return this;
    }
    public Boolean downvoted;
    public Posts withDownvoted(Boolean downvoted) {
        this.downvoted = downvoted;
        return this;
    }
    public Long lastActivityDate;
    public Posts withLastActivityDate(Long lastActivityDate) {
        this.lastActivityDate = lastActivityDate;
        return this;
    }
    public Long lastEditDate;
    public Posts withLastEditDate(Long lastEditDate) {
        this.lastEditDate = lastEditDate;
        return this;
    }
    public PostsLastEditor lastEditor;
    public Posts withLastEditor(PostsLastEditor lastEditor) {
        this.lastEditor = lastEditor;
        return this;
    }
    public String link;
    public Posts withLink(String link) {
        this.link = link;
        return this;
    }
    public PostsOwner owner;
    public Posts withOwner(PostsOwner owner) {
        this.owner = owner;
        return this;
    }
    public Long postId;
    public Posts withPostId(Long postId) {
        this.postId = postId;
        return this;
    }
    public String postType;
    public Posts withPostType(String postType) {
        this.postType = postType;
        return this;
    }
    public Long score;
    public Posts withScore(Long score) {
        this.score = score;
        return this;
    }
    public String shareLink;
    public Posts withShareLink(String shareLink) {
        this.shareLink = shareLink;
        return this;
    }
    public String title;
    public Posts withTitle(String title) {
        this.title = title;
        return this;
    }
    public Long upVoteCount;
    public Posts withUpVoteCount(Long upVoteCount) {
        this.upVoteCount = upVoteCount;
        return this;
    }
    public Boolean upvoted;
    public Posts withUpvoted(Boolean upvoted) {
        this.upvoted = upvoted;
        return this;
    }
}