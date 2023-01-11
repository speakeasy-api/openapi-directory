package openapisdk.models.shared;



/**
 * Twitter
 * Twitter data
**/
public class Twitter {
    public TwitterHandleEnum handle;
    public Twitter withHandle(TwitterHandleEnum handle) {
        this.handle = handle;
        return this;
    }
    public String[] hashtags;
    public Twitter withHashtags(String[] hashtags) {
        this.hashtags = hashtags;
        return this;
    }
}