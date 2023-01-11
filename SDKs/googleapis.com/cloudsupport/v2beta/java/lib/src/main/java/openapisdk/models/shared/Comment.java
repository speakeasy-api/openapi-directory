package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Comment
 * A comment associated with a support case.
**/
public class Comment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public Comment withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Comment withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public Actor creator;
    public Comment withCreator(Actor creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Comment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("plainTextBody")
    public String plainTextBody;
    public Comment withPlainTextBody(String plainTextBody) {
        this.plainTextBody = plainTextBody;
        return this;
    }
}