package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CollectionResponseExtensionActionDefinitionForwardPaging {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paging")
    public ForwardPaging paging;
    public CollectionResponseExtensionActionDefinitionForwardPaging withPaging(ForwardPaging paging) {
        this.paging = paging;
        return this;
    }
    @JsonProperty("results")
    public ExtensionActionDefinition[] results;
    public CollectionResponseExtensionActionDefinitionForwardPaging withResults(ExtensionActionDefinition[] results) {
        this.results = results;
        return this;
    }
}