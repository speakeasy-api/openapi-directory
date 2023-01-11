package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProjectsGetV2ProjectsProjectIdGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String[] country;
    public ProjectsGetV2ProjectsProjectIdGetQueryParams withCountry(String[] country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country_id")
    public String countryId;
    public ProjectsGetV2ProjectsProjectIdGetQueryParams withCountryId(String countryId) {
        this.countryId = countryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entity")
    public String entity;
    public ProjectsGetV2ProjectsProjectIdGetQueryParams withEntity(String entity) {
        this.entity = entity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isAnalysis")
    public Boolean isAnalysis;
    public ProjectsGetV2ProjectsProjectIdGetQueryParams withIsAnalysis(Boolean isAnalysis) {
        this.isAnalysis = isAnalysis;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isMobile")
    public Boolean isMobile;
    public ProjectsGetV2ProjectsProjectIdGetQueryParams withIsMobile(Boolean isMobile) {
        this.isMobile = isMobile;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ProjectsGetV2ProjectsProjectIdGetQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ProjectsGetV2ProjectsProjectIdGetQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_by")
    public java.util.Map<String, Object> orderBy;
    public ProjectsGetV2ProjectsProjectIdGetQueryParams withOrderBy(java.util.Map<String, Object> orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ProjectsGetV2ProjectsProjectIdGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parameter")
    public Object[] parameter;
    public ProjectsGetV2ProjectsProjectIdGetQueryParams withParameter(Object[] parameter) {
        this.parameter = parameter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parameter_id")
    public Long parameterId;
    public ProjectsGetV2ProjectsProjectIdGetQueryParams withParameterId(Long parameterId) {
        this.parameterId = parameterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=project")
    public Object[] project;
    public ProjectsGetV2ProjectsProjectIdGetQueryParams withProject(Object[] project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sensorType")
    public String sensorType;
    public ProjectsGetV2ProjectsProjectIdGetQueryParams withSensorType(String sensorType) {
        this.sensorType = sensorType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public java.util.Map<String, Object> sort;
    public ProjectsGetV2ProjectsProjectIdGetQueryParams withSort(java.util.Map<String, Object> sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceName")
    public String[] sourceName;
    public ProjectsGetV2ProjectsProjectIdGetQueryParams withSourceName(String[] sourceName) {
        this.sourceName = sourceName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unit")
    public String[] unit;
    public ProjectsGetV2ProjectsProjectIdGetQueryParams withUnit(String[] unit) {
        this.unit = unit;
        return this;
    }
}