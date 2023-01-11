package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchHpoEntitiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=anatomical_system")
    public String anatomicalSystem;
    public GetSearchHpoEntitiesQueryParams withAnatomicalSystem(String anatomicalSystem) {
        this.anatomicalSystem = anatomicalSystem;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=anatomical_system_label")
    public String anatomicalSystemLabel;
    public GetSearchHpoEntitiesQueryParams withAnatomicalSystemLabel(String anatomicalSystemLabel) {
        this.anatomicalSystemLabel = anatomicalSystemLabel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=highlight_class")
    public String highlightClass;
    public GetSearchHpoEntitiesQueryParams withHighlightClass(String highlightClass) {
        this.highlightClass = highlightClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phenotype_group")
    public String phenotypeGroup;
    public GetSearchHpoEntitiesQueryParams withPhenotypeGroup(String phenotypeGroup) {
        this.phenotypeGroup = phenotypeGroup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phenotype_group_label")
    public String phenotypeGroupLabel;
    public GetSearchHpoEntitiesQueryParams withPhenotypeGroupLabel(String phenotypeGroupLabel) {
        this.phenotypeGroupLabel = phenotypeGroupLabel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=rows")
    public Long rows;
    public GetSearchHpoEntitiesQueryParams withRows(Long rows) {
        this.rows = rows;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public String start;
    public GetSearchHpoEntitiesQueryParams withStart(String start) {
        this.start = start;
        return this;
    }
}