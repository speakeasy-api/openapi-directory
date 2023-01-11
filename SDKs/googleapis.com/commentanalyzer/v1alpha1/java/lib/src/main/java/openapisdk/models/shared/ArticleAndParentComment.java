package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ArticleAndParentComment
 * A type of context specific to a comment left on a single-threaded comment message board, where comments are either a top level comment or the child of a top level comment.
**/
public class ArticleAndParentComment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("article")
    public TextEntry article;
    public ArticleAndParentComment withArticle(TextEntry article) {
        this.article = article;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentComment")
    public TextEntry parentComment;
    public ArticleAndParentComment withParentComment(TextEntry parentComment) {
        this.parentComment = parentComment;
        return this;
    }
}