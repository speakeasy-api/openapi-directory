package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Item
 * A specific rich result found on the page.
**/
public class Item {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issues")
    public RichResultsIssue[] issues;
    public Item withIssues(RichResultsIssue[] issues) {
        this.issues = issues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Item withName(String name) {
        this.name = name;
        return this;
    }
}