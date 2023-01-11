package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleExampleLibraryagentV1Book
 * A single book in the library.
**/
public class GoogleExampleLibraryagentV1Book {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("author")
    public String author;
    public GoogleExampleLibraryagentV1Book withAuthor(String author) {
        this.author = author;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleExampleLibraryagentV1Book withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read")
    public Boolean read;
    public GoogleExampleLibraryagentV1Book withRead(Boolean read) {
        this.read = read;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GoogleExampleLibraryagentV1Book withTitle(String title) {
        this.title = title;
        return this;
    }
}