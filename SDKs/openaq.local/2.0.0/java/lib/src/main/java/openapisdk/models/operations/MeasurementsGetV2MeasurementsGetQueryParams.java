package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeasurementsGetV2MeasurementsGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String[] city;
    public MeasurementsGetV2MeasurementsGetQueryParams withCity(String[] city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=coordinates")
    public String coordinates;
    public MeasurementsGetV2MeasurementsGetQueryParams withCoordinates(String coordinates) {
        this.coordinates = coordinates;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String[] country;
    public MeasurementsGetV2MeasurementsGetQueryParams withCountry(String[] country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country_id")
    public String countryId;
    public MeasurementsGetV2MeasurementsGetQueryParams withCountryId(String countryId) {
        this.countryId = countryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_from")
    public Object dateFrom;
    public MeasurementsGetV2MeasurementsGetQueryParams withDateFrom(Object dateFrom) {
        this.dateFrom = dateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=date_to")
    public Object dateTo;
    public MeasurementsGetV2MeasurementsGetQueryParams withDateTo(Object dateTo) {
        this.dateTo = dateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entity")
    public openapisdk.models.shared.EntityTypesEnum entity;
    public MeasurementsGetV2MeasurementsGetQueryParams withEntity(openapisdk.models.shared.EntityTypesEnum entity) {
        this.entity = entity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public String format;
    public MeasurementsGetV2MeasurementsGetQueryParams withFormat(String format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=has_geo")
    public Boolean hasGeo;
    public MeasurementsGetV2MeasurementsGetQueryParams withHasGeo(Boolean hasGeo) {
        this.hasGeo = hasGeo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_fields")
    public String includeFields;
    public MeasurementsGetV2MeasurementsGetQueryParams withIncludeFields(String includeFields) {
        this.includeFields = includeFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isAnalysis")
    public Boolean isAnalysis;
    public MeasurementsGetV2MeasurementsGetQueryParams withIsAnalysis(Boolean isAnalysis) {
        this.isAnalysis = isAnalysis;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isMobile")
    public Boolean isMobile;
    public MeasurementsGetV2MeasurementsGetQueryParams withIsMobile(Boolean isMobile) {
        this.isMobile = isMobile;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public MeasurementsGetV2MeasurementsGetQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location")
    public Object[] location;
    public MeasurementsGetV2MeasurementsGetQueryParams withLocation(Object[] location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location_id")
    public Long locationId;
    public MeasurementsGetV2MeasurementsGetQueryParams withLocationId(Long locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public MeasurementsGetV2MeasurementsGetQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_by")
    public java.util.Map<String, Object> orderBy;
    public MeasurementsGetV2MeasurementsGetQueryParams withOrderBy(java.util.Map<String, Object> orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public MeasurementsGetV2MeasurementsGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parameter")
    public Object[] parameter;
    public MeasurementsGetV2MeasurementsGetQueryParams withParameter(Object[] parameter) {
        this.parameter = parameter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parameter_id")
    public Long parameterId;
    public MeasurementsGetV2MeasurementsGetQueryParams withParameterId(Long parameterId) {
        this.parameterId = parameterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=project")
    public Long project;
    public MeasurementsGetV2MeasurementsGetQueryParams withProject(Long project) {
        this.project = project;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Long radius;
    public MeasurementsGetV2MeasurementsGetQueryParams withRadius(Long radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sensorType")
    public openapisdk.models.shared.SensorTypesEnum sensorType;
    public MeasurementsGetV2MeasurementsGetQueryParams withSensorType(openapisdk.models.shared.SensorTypesEnum sensorType) {
        this.sensorType = sensorType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public java.util.Map<String, Object> sort;
    public MeasurementsGetV2MeasurementsGetQueryParams withSort(java.util.Map<String, Object> sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unit")
    public String[] unit;
    public MeasurementsGetV2MeasurementsGetQueryParams withUnit(String[] unit) {
        this.unit = unit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=value_from")
    public Double valueFrom;
    public MeasurementsGetV2MeasurementsGetQueryParams withValueFrom(Double valueFrom) {
        this.valueFrom = valueFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=value_to")
    public Double valueTo;
    public MeasurementsGetV2MeasurementsGetQueryParams withValueTo(Double valueTo) {
        this.valueTo = valueTo;
        return this;
    }
}