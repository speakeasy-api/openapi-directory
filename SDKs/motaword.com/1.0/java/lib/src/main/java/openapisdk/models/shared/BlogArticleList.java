package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BlogArticleList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("articles")
    public BlogArticle[] articles;
    public BlogArticleList withArticles(BlogArticle[] articles) {
        this.articles = articles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PagingMeta meta;
    public BlogArticleList withMeta(PagingMeta meta) {
        this.meta = meta;
        return this;
    }
}