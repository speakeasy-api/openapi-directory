package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public String content;
    public QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public Object link;
    public QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText withLink(Object link) {
        this.link = link;
        return this;
    }
}