package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEvidenceFilterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=data source")
    public String dataSource;
    public GetEvidenceFilterQueryParams withDataSource(String dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=datastructure")
    public String datastructure;
    public GetEvidenceFilterQueryParams withDatastructure(String datastructure) {
        this.datastructure = datastructure;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=datatype")
    public String datatype;
    public GetEvidenceFilterQueryParams withDatatype(String datatype) {
        this.datatype = datatype;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disease")
    public String disease;
    public GetEvidenceFilterQueryParams withDisease(String disease) {
        this.disease = disease;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public GetEvidenceFilterQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public String format;
    public GetEvidenceFilterQueryParams withFormat(String format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public Double from;
    public GetEvidenceFilterQueryParams withFrom(Double from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pathway")
    public String pathway;
    public GetEvidenceFilterQueryParams withPathway(String pathway) {
        this.pathway = pathway;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scorevalue_max")
    public Float scorevalueMax;
    public GetEvidenceFilterQueryParams withScorevalueMax(Float scorevalueMax) {
        this.scorevalueMax = scorevalueMax;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=scorevalue_min")
    public Float scorevalueMin;
    public GetEvidenceFilterQueryParams withScorevalueMin(Float scorevalueMin) {
        this.scorevalueMin = scorevalueMin;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=size")
    public Double size;
    public GetEvidenceFilterQueryParams withSize(Double size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public GetEvidenceFilterQueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=target")
    public String target;
    public GetEvidenceFilterQueryParams withTarget(String target) {
        this.target = target;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uniprotkw")
    public String uniprotkw;
    public GetEvidenceFilterQueryParams withUniprotkw(String uniprotkw) {
        this.uniprotkw = uniprotkw;
        return this;
    }
}