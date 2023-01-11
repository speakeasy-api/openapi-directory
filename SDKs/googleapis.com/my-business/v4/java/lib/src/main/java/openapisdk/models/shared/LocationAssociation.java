package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationAssociation
 * How the media item is associated with its location.
**/
public class LocationAssociation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public LocationAssociationCategoryEnum category;
    public LocationAssociation withCategory(LocationAssociationCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceListItemId")
    public String priceListItemId;
    public LocationAssociation withPriceListItemId(String priceListItemId) {
        this.priceListItemId = priceListItemId;
        return this;
    }
}