package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Adloox
 * Details of Adloox settings.
**/
public class Adloox {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedAdlooxCategories")
    public AdlooxExcludedAdlooxCategoriesEnum[] excludedAdlooxCategories;
    public Adloox withExcludedAdlooxCategories(AdlooxExcludedAdlooxCategoriesEnum[] excludedAdlooxCategories) {
        this.excludedAdlooxCategories = excludedAdlooxCategories;
        return this;
    }
}