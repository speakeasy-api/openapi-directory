package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Expansions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("media")
    public Object[] media;
    public Expansions withMedia(Object[] media) {
        this.media = media;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("places")
    public Object[] places;
    public Expansions withPlaces(Object[] places) {
        this.places = places;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polls")
    public Poll[] polls;
    public Expansions withPolls(Poll[] polls) {
        this.polls = polls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tweets")
    public Object[] tweets;
    public Expansions withTweets(Object[] tweets) {
        this.tweets = tweets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public Object[] users;
    public Expansions withUsers(Object[] users) {
        this.users = users;
        return this;
    }
}