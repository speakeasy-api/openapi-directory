package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleExampleLibraryagentV1Shelf
 * A Shelf contains a collection of books with a theme.
**/
public class GoogleExampleLibraryagentV1Shelf {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleExampleLibraryagentV1Shelf withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("theme")
    public String theme;
    public GoogleExampleLibraryagentV1Shelf withTheme(String theme) {
        this.theme = theme;
        return this;
    }
}