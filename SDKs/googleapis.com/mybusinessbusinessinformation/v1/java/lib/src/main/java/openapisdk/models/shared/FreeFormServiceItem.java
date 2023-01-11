package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FreeFormServiceItem
 * Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface.
**/
public class FreeFormServiceItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public FreeFormServiceItem withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public Label label;
    public FreeFormServiceItem withLabel(Label label) {
        this.label = label;
        return this;
    }
}