package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAutocompleteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=boost_fx")
    public String[] boostFx;
    public GetAutocompleteQueryParams withBoostFx(String[] boostFx) {
        this.boostFx = boostFx;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=boost_q")
    public String[] boostQ;
    public GetAutocompleteQueryParams withBoostQ(String[] boostQ) {
        this.boostQ = boostQ;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String[] category;
    public GetAutocompleteQueryParams withCategory(String[] category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_groups")
    public Boolean excludeGroups;
    public GetAutocompleteQueryParams withExcludeGroups(Boolean excludeGroups) {
        this.excludeGroups = excludeGroups;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fq")
    public String[] fq;
    public GetAutocompleteQueryParams withFq(String[] fq) {
        this.fq = fq;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=highlight_class")
    public String highlightClass;
    public GetAutocompleteQueryParams withHighlightClass(String highlightClass) {
        this.highlightClass = highlightClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_eqs")
    public Boolean includeEqs;
    public GetAutocompleteQueryParams withIncludeEqs(Boolean includeEqs) {
        this.includeEqs = includeEqs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_match")
    public String minMatch;
    public GetAutocompleteQueryParams withMinMatch(String minMatch) {
        this.minMatch = minMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minimal_tokenizer")
    public Boolean minimalTokenizer;
    public GetAutocompleteQueryParams withMinimalTokenizer(Boolean minimalTokenizer) {
        this.minimalTokenizer = minimalTokenizer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prefix")
    public String[] prefix;
    public GetAutocompleteQueryParams withPrefix(String[] prefix) {
        this.prefix = prefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Long rows;
    public GetAutocompleteQueryParams withRows(Long rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetAutocompleteQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taxon")
    public String[] taxon;
    public GetAutocompleteQueryParams withTaxon(String[] taxon) {
        this.taxon = taxon;
        return this;
    }
}