package openapisdk.models.shared;



public class Comment {
    public DeveloperComment developerComment;
    public Comment withDeveloperComment(DeveloperComment developerComment) {
        this.developerComment = developerComment;
        return this;
    }
    public UserComment userComment;
    public Comment withUserComment(UserComment userComment) {
        this.userComment = userComment;
        return this;
    }
}