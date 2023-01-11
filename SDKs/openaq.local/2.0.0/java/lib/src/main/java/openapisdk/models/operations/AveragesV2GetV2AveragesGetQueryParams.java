package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AveragesV2GetV2AveragesGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String[] country;
    public AveragesV2GetV2AveragesGetQueryParams withCountry(String[] country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country_id")
    public String countryId;
    public AveragesV2GetV2AveragesGetQueryParams withCountryId(String countryId) {
        this.countryId = countryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_from")
    public Object dateFrom;
    public AveragesV2GetV2AveragesGetQueryParams withDateFrom(Object dateFrom) {
        this.dateFrom = dateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_to")
    public Object dateTo;
    public AveragesV2GetV2AveragesGetQueryParams withDateTo(Object dateTo) {
        this.dateTo = dateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public Boolean group;
    public AveragesV2GetV2AveragesGetQueryParams withGroup(Boolean group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public AveragesV2GetV2AveragesGetQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location")
    public String[] location;
    public AveragesV2GetV2AveragesGetQueryParams withLocation(String[] location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public AveragesV2GetV2AveragesGetQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public AveragesV2GetV2AveragesGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parameter")
    public Object[] parameter;
    public AveragesV2GetV2AveragesGetQueryParams withParameter(Object[] parameter) {
        this.parameter = parameter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parameter_id")
    public Long parameterId;
    public AveragesV2GetV2AveragesGetQueryParams withParameterId(Long parameterId) {
        this.parameterId = parameterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=project")
    public Object[] project;
    public AveragesV2GetV2AveragesGetQueryParams withProject(Object[] project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=project_id")
    public Long projectId;
    public AveragesV2GetV2AveragesGetQueryParams withProjectId(Long projectId) {
        this.projectId = projectId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public java.util.Map<String, Object> sort;
    public AveragesV2GetV2AveragesGetQueryParams withSort(java.util.Map<String, Object> sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=spatial")
    public openapisdk.models.shared.SpatialEnum spatial;
    public AveragesV2GetV2AveragesGetQueryParams withSpatial(openapisdk.models.shared.SpatialEnum spatial) {
        this.spatial = spatial;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=temporal")
    public openapisdk.models.shared.TemporalEnum temporal;
    public AveragesV2GetV2AveragesGetQueryParams withTemporal(openapisdk.models.shared.TemporalEnum temporal) {
        this.temporal = temporal;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unit")
    public String[] unit;
    public AveragesV2GetV2AveragesGetQueryParams withUnit(String[] unit) {
        this.unit = unit;
        return this;
    }
}