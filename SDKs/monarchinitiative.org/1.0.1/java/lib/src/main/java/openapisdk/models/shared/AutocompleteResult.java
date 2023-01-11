package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AutocompleteResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String[] category;
    public AutocompleteResult withCategory(String[] category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("equivalent_ids")
    public String[] equivalentIds;
    public AutocompleteResult withEquivalentIds(String[] equivalentIds) {
        this.equivalentIds = equivalentIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_highlight")
    public Boolean hasHighlight;
    public AutocompleteResult withHasHighlight(Boolean hasHighlight) {
        this.hasHighlight = hasHighlight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highlight")
    public String highlight;
    public AutocompleteResult withHighlight(String highlight) {
        this.highlight = highlight;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AutocompleteResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String[] label;
    public AutocompleteResult withLabel(String[] label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("match")
    public String match;
    public AutocompleteResult withMatch(String match) {
        this.match = match;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxon")
    public String taxon;
    public AutocompleteResult withTaxon(String taxon) {
        this.taxon = taxon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxon_label")
    public String taxonLabel;
    public AutocompleteResult withTaxonLabel(String taxonLabel) {
        this.taxonLabel = taxonLabel;
        return this;
    }
}