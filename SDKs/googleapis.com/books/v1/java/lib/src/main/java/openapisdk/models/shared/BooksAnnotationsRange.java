package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BooksAnnotationsRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endOffset")
    public String endOffset;
    public BooksAnnotationsRange withEndOffset(String endOffset) {
        this.endOffset = endOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endPosition")
    public String endPosition;
    public BooksAnnotationsRange withEndPosition(String endPosition) {
        this.endPosition = endPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startOffset")
    public String startOffset;
    public BooksAnnotationsRange withStartOffset(String startOffset) {
        this.startOffset = startOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startPosition")
    public String startPosition;
    public BooksAnnotationsRange withStartPosition(String startPosition) {
        this.startPosition = startPosition;
        return this;
    }
}