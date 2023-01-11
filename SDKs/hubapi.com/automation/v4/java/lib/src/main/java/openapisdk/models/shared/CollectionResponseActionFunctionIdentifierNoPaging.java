package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CollectionResponseActionFunctionIdentifierNoPaging {
    @JsonProperty("results")
    public ActionFunctionIdentifier[] results;
    public CollectionResponseActionFunctionIdentifierNoPaging withResults(ActionFunctionIdentifier[] results) {
        this.results = results;
        return this;
    }
}