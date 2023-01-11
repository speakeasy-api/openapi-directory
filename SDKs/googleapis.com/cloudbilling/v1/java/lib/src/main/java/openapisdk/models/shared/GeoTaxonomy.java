package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GeoTaxonomy
 * Encapsulates the geographic taxonomy data for a sku.
**/
public class GeoTaxonomy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regions")
    public String[] regions;
    public GeoTaxonomy withRegions(String[] regions) {
        this.regions = regions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GeoTaxonomyTypeEnum type;
    public GeoTaxonomy withType(GeoTaxonomyTypeEnum type) {
        this.type = type;
        return this;
    }
}