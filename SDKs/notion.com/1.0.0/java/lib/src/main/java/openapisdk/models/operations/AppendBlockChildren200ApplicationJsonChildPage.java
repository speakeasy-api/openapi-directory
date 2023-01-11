package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AppendBlockChildren200ApplicationJsonChildPage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public AppendBlockChildren200ApplicationJsonChildPage withTitle(String title) {
        this.title = title;
        return this;
    }
}