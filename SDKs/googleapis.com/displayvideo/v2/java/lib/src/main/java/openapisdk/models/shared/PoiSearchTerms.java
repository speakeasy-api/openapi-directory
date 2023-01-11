package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PoiSearchTerms
 * Search terms for POI targeting options.
**/
public class PoiSearchTerms {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poiQuery")
    public String poiQuery;
    public PoiSearchTerms withPoiQuery(String poiQuery) {
        this.poiQuery = poiQuery;
        return this;
    }
}