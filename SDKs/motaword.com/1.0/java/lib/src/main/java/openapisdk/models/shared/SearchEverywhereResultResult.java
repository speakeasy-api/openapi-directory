package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchEverywhereResultResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public DocumentInSearch[] documents;
    public SearchEverywhereResultResult withDocuments(DocumentInSearch[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projects")
    public ProjectInSearch[] projects;
    public SearchEverywhereResultResult withProjects(ProjectInSearch[] projects) {
        this.projects = projects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("strings")
    public StringInSearch[] strings;
    public SearchEverywhereResultResult withStrings(StringInSearch[] strings) {
        this.strings = strings;
        return this;
    }
}