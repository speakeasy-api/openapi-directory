package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Context
 * Context is typically something that a Comment is referencing or replying to (such as an article, or previous comment). Note: Populate only ONE OF the following fields. The oneof syntax cannot be used because that would require nesting entries inside another message and breaking backwards compatibility. The server will return an error if more than one of the following fields is present.
**/
public class Context {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("articleAndParentComment")
    public ArticleAndParentComment articleAndParentComment;
    public Context withArticleAndParentComment(ArticleAndParentComment articleAndParentComment) {
        this.articleAndParentComment = articleAndParentComment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public TextEntry[] entries;
    public Context withEntries(TextEntry[] entries) {
        this.entries = entries;
        return this;
    }
}