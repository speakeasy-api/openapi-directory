package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeannotationContentRanges
 * The content ranges to identify the selected text.
**/
public class VolumeannotationContentRanges {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cfiRange")
    public BooksAnnotationsRange cfiRange;
    public VolumeannotationContentRanges withCfiRange(BooksAnnotationsRange cfiRange) {
        this.cfiRange = cfiRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentVersion")
    public String contentVersion;
    public VolumeannotationContentRanges withContentVersion(String contentVersion) {
        this.contentVersion = contentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gbImageRange")
    public BooksAnnotationsRange gbImageRange;
    public VolumeannotationContentRanges withGbImageRange(BooksAnnotationsRange gbImageRange) {
        this.gbImageRange = gbImageRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gbTextRange")
    public BooksAnnotationsRange gbTextRange;
    public VolumeannotationContentRanges withGbTextRange(BooksAnnotationsRange gbTextRange) {
        this.gbTextRange = gbTextRange;
        return this;
    }
}