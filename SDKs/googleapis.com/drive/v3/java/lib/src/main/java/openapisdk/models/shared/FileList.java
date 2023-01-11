package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileList
 * A list of files.
**/
public class FileList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("files")
    public File[] files;
    public FileList withFiles(File[] files) {
        this.files = files;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("incompleteSearch")
    public Boolean incompleteSearch;
    public FileList withIncompleteSearch(Boolean incompleteSearch) {
        this.incompleteSearch = incompleteSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public FileList withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public FileList withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}