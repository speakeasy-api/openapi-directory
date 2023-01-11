package openapisdk.models.shared;



public class TagScoreObjects {
    public Long postCount;
    public TagScoreObjects withPostCount(Long postCount) {
        this.postCount = postCount;
        return this;
    }
    public Long score;
    public TagScoreObjects withScore(Long score) {
        this.score = score;
        return this;
    }
    public TagScoreObjectsUser user;
    public TagScoreObjects withUser(TagScoreObjectsUser user) {
        this.user = user;
        return this;
    }
}