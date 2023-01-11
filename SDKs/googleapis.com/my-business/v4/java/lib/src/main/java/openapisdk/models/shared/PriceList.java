package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PriceList
 * A list of item price information. Price lists are structured as one or more price lists, each containing one or more sections with one or more items. For example, food price lists may represent breakfast/lunch/dinner menus, with sections for burgers/steak/seafood.
**/
public class PriceList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public Label[] labels;
    public PriceList withLabels(Label[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceListId")
    public String priceListId;
    public PriceList withPriceListId(String priceListId) {
        this.priceListId = priceListId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sections")
    public Section[] sections;
    public PriceList withSections(Section[] sections) {
        this.sections = sections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceUrl")
    public String sourceUrl;
    public PriceList withSourceUrl(String sourceUrl) {
        this.sourceUrl = sourceUrl;
        return this;
    }
}