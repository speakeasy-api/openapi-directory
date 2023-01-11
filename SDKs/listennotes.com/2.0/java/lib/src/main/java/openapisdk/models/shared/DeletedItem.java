package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeletedItem
 * A deleted episode or podcast.
 * An episode or a podcast could be deleted from our podcast database.
 * Possible reasons: 1) Podcast producers sometimes delete their old episodes. 2) Copyright issues.
 * 
**/
public class DeletedItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public DeletedItem withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DeletedItem withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public DeletedItem withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public DeletedItem withTitle(String title) {
        this.title = title;
        return this;
    }
}