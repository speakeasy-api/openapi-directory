package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * CodeSearchResultItem
 * Code Search Result Item
**/
public class CodeSearchResultItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_size")
    public Long fileSize;
    public CodeSearchResultItem withFileSize(Long fileSize) {
        this.fileSize = fileSize;
        return this;
    }
    @JsonProperty("git_url")
    public String gitUrl;
    public CodeSearchResultItem withGitUrl(String gitUrl) {
        this.gitUrl = gitUrl;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public CodeSearchResultItem withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public CodeSearchResultItem withLanguage(String language) {
        this.language = language;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_modified_at")
    public OffsetDateTime lastModifiedAt;
    public CodeSearchResultItem withLastModifiedAt(OffsetDateTime lastModifiedAt) {
        this.lastModifiedAt = lastModifiedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_numbers")
    public String[] lineNumbers;
    public CodeSearchResultItem withLineNumbers(String[] lineNumbers) {
        this.lineNumbers = lineNumbers;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CodeSearchResultItem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public CodeSearchResultItem withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonProperty("repository")
    public MinimalRepository repository;
    public CodeSearchResultItem withRepository(MinimalRepository repository) {
        this.repository = repository;
        return this;
    }
    @JsonProperty("score")
    public Double score;
    public CodeSearchResultItem withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public CodeSearchResultItem withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_matches")
    public SearchResultTextMatches[] textMatches;
    public CodeSearchResultItem withTextMatches(SearchResultTextMatches[] textMatches) {
        this.textMatches = textMatches;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CodeSearchResultItem withUrl(String url) {
        this.url = url;
        return this;
    }
}