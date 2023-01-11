package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchEntitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=boost_fx")
    public String[] boostFx;
    public GetSearchEntitiesQueryParams withBoostFx(String[] boostFx) {
        this.boostFx = boostFx;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=boost_q")
    public String[] boostQ;
    public GetSearchEntitiesQueryParams withBoostQ(String[] boostQ) {
        this.boostQ = boostQ;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=category")
    public String[] category;
    public GetSearchEntitiesQueryParams withCategory(String[] category) {
        this.category = category;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=exclude_groups")
    public Boolean excludeGroups;
    public GetSearchEntitiesQueryParams withExcludeGroups(Boolean excludeGroups) {
        this.excludeGroups = excludeGroups;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fq")
    public String[] fq;
    public GetSearchEntitiesQueryParams withFq(String[] fq) {
        this.fq = fq;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=highlight_class")
    public String highlightClass;
    public GetSearchEntitiesQueryParams withHighlightClass(String highlightClass) {
        this.highlightClass = highlightClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_eqs")
    public Boolean includeEqs;
    public GetSearchEntitiesQueryParams withIncludeEqs(Boolean includeEqs) {
        this.includeEqs = includeEqs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_match")
    public String minMatch;
    public GetSearchEntitiesQueryParams withMinMatch(String minMatch) {
        this.minMatch = minMatch;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minimal_tokenizer")
    public Boolean minimalTokenizer;
    public GetSearchEntitiesQueryParams withMinimalTokenizer(Boolean minimalTokenizer) {
        this.minimalTokenizer = minimalTokenizer;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prefix")
    public String[] prefix;
    public GetSearchEntitiesQueryParams withPrefix(String[] prefix) {
        this.prefix = prefix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Long rows;
    public GetSearchEntitiesQueryParams withRows(Long rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetSearchEntitiesQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=taxon")
    public String[] taxon;
    public GetSearchEntitiesQueryParams withTaxon(String[] taxon) {
        this.taxon = taxon;
        return this;
    }
}