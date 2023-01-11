package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditorialUpdatedContentRights {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countries")
    public String countries;
    public EditorialUpdatedContentRights withCountries(String countries) {
        this.countries = countries;
        return this;
    }
}