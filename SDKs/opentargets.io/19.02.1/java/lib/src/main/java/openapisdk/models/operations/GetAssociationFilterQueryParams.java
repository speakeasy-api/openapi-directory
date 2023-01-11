package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAssociationFilterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=datasource")
    public String datasource;
    public GetAssociationFilterQueryParams withDatasource(String datasource) {
        this.datasource = datasource;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=datastructure")
    public String datastructure;
    public GetAssociationFilterQueryParams withDatastructure(String datastructure) {
        this.datastructure = datastructure;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=datatype")
    public String datatype;
    public GetAssociationFilterQueryParams withDatatype(String datatype) {
        this.datatype = datatype;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direct")
    public Boolean direct;
    public GetAssociationFilterQueryParams withDirect(Boolean direct) {
        this.direct = direct;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disease")
    public String disease;
    public GetAssociationFilterQueryParams withDisease(String disease) {
        this.disease = disease;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=facets")
    public Boolean facets;
    public GetAssociationFilterQueryParams withFacets(Boolean facets) {
        this.facets = facets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public GetAssociationFilterQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public String format;
    public GetAssociationFilterQueryParams withFormat(String format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public Double from;
    public GetAssociationFilterQueryParams withFrom(Double from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pathway")
    public String pathway;
    public GetAssociationFilterQueryParams withPathway(String pathway) {
        this.pathway = pathway;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scorevalue_max")
    public Float scorevalueMax;
    public GetAssociationFilterQueryParams withScorevalueMax(Float scorevalueMax) {
        this.scorevalueMax = scorevalueMax;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scorevalue_min")
    public Float scorevalueMin;
    public GetAssociationFilterQueryParams withScorevalueMin(Float scorevalueMin) {
        this.scorevalueMin = scorevalueMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scorevalue_types")
    public String scorevalueTypes;
    public GetAssociationFilterQueryParams withScorevalueTypes(String scorevalueTypes) {
        this.scorevalueTypes = scorevalueTypes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search")
    public String search;
    public GetAssociationFilterQueryParams withSearch(String search) {
        this.search = search;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Double size;
    public GetAssociationFilterQueryParams withSize(Double size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetAssociationFilterQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target")
    public String target;
    public GetAssociationFilterQueryParams withTarget(String target) {
        this.target = target;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target_class")
    public String targetClass;
    public GetAssociationFilterQueryParams withTargetClass(String targetClass) {
        this.targetClass = targetClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=therapeutic_area")
    public String therapeuticArea;
    public GetAssociationFilterQueryParams withTherapeuticArea(String therapeuticArea) {
        this.therapeuticArea = therapeuticArea;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uniprotkw")
    public String uniprotkw;
    public GetAssociationFilterQueryParams withUniprotkw(String uniprotkw) {
        this.uniprotkw = uniprotkw;
        return this;
    }
}