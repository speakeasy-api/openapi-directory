package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class Locationsv1GetV1LocationsGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String[] city;
    public Locationsv1GetV1LocationsGetQueryParams withCity(String[] city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=coordinates")
    public String coordinates;
    public Locationsv1GetV1LocationsGetQueryParams withCoordinates(String coordinates) {
        this.coordinates = coordinates;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String[] country;
    public Locationsv1GetV1LocationsGetQueryParams withCountry(String[] country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country_id")
    public String countryId;
    public Locationsv1GetV1LocationsGetQueryParams withCountryId(String countryId) {
        this.countryId = countryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dumpRaw")
    public Boolean dumpRaw;
    public Locationsv1GetV1LocationsGetQueryParams withDumpRaw(Boolean dumpRaw) {
        this.dumpRaw = dumpRaw;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entity")
    public openapisdk.models.shared.EntityTypesEnum entity;
    public Locationsv1GetV1LocationsGetQueryParams withEntity(openapisdk.models.shared.EntityTypesEnum entity) {
        this.entity = entity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=has_geo")
    public Boolean hasGeo;
    public Locationsv1GetV1LocationsGetQueryParams withHasGeo(Boolean hasGeo) {
        this.hasGeo = hasGeo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isAnalysis")
    public Boolean isAnalysis;
    public Locationsv1GetV1LocationsGetQueryParams withIsAnalysis(Boolean isAnalysis) {
        this.isAnalysis = isAnalysis;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isMobile")
    public Boolean isMobile;
    public Locationsv1GetV1LocationsGetQueryParams withIsMobile(Boolean isMobile) {
        this.isMobile = isMobile;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public Locationsv1GetV1LocationsGetQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location")
    public Object[] location;
    public Locationsv1GetV1LocationsGetQueryParams withLocation(Object[] location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location_id")
    public Long locationId;
    public Locationsv1GetV1LocationsGetQueryParams withLocationId(Long locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=manufacturerName")
    public String[] manufacturerName;
    public Locationsv1GetV1LocationsGetQueryParams withManufacturerName(String[] manufacturerName) {
        this.manufacturerName = manufacturerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modelName")
    public String[] modelName;
    public Locationsv1GetV1LocationsGetQueryParams withModelName(String[] modelName) {
        this.modelName = modelName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public Locationsv1GetV1LocationsGetQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_by")
    public java.util.Map<String, Object> orderBy;
    public Locationsv1GetV1LocationsGetQueryParams withOrderBy(java.util.Map<String, Object> orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public Locationsv1GetV1LocationsGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parameter")
    public Object[] parameter;
    public Locationsv1GetV1LocationsGetQueryParams withParameter(Object[] parameter) {
        this.parameter = parameter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parameter_id")
    public Long parameterId;
    public Locationsv1GetV1LocationsGetQueryParams withParameterId(Long parameterId) {
        this.parameterId = parameterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Long radius;
    public Locationsv1GetV1LocationsGetQueryParams withRadius(Long radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sensorType")
    public openapisdk.models.shared.SensorTypesEnum sensorType;
    public Locationsv1GetV1LocationsGetQueryParams withSensorType(openapisdk.models.shared.SensorTypesEnum sensorType) {
        this.sensorType = sensorType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public java.util.Map<String, Object> sort;
    public Locationsv1GetV1LocationsGetQueryParams withSort(java.util.Map<String, Object> sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceName")
    public String[] sourceName;
    public Locationsv1GetV1LocationsGetQueryParams withSourceName(String[] sourceName) {
        this.sourceName = sourceName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unit")
    public String[] unit;
    public Locationsv1GetV1LocationsGetQueryParams withUnit(String[] unit) {
        this.unit = unit;
        return this;
    }
}