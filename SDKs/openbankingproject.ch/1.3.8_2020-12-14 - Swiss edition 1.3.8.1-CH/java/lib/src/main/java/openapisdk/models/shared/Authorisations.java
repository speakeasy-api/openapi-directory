package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Authorisations
 * An array of all authorisationIds.
**/
public class Authorisations {
    @JsonProperty("authorisationIds")
    public String[] authorisationIds;
    public Authorisations withAuthorisationIds(String[] authorisationIds) {
        this.authorisationIds = authorisationIds;
        return this;
    }
}