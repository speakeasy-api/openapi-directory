package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LatestGetV2LatestGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=city")
    public String[] city;
    public LatestGetV2LatestGetQueryParams withCity(String[] city) {
        this.city = city;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=coordinates")
    public String coordinates;
    public LatestGetV2LatestGetQueryParams withCoordinates(String coordinates) {
        this.coordinates = coordinates;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String[] country;
    public LatestGetV2LatestGetQueryParams withCountry(String[] country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country_id")
    public String countryId;
    public LatestGetV2LatestGetQueryParams withCountryId(String countryId) {
        this.countryId = countryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dumpRaw")
    public Boolean dumpRaw;
    public LatestGetV2LatestGetQueryParams withDumpRaw(Boolean dumpRaw) {
        this.dumpRaw = dumpRaw;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=entity")
    public openapisdk.models.shared.EntityTypesEnum entity;
    public LatestGetV2LatestGetQueryParams withEntity(openapisdk.models.shared.EntityTypesEnum entity) {
        this.entity = entity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=has_geo")
    public Boolean hasGeo;
    public LatestGetV2LatestGetQueryParams withHasGeo(Boolean hasGeo) {
        this.hasGeo = hasGeo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isAnalysis")
    public Boolean isAnalysis;
    public LatestGetV2LatestGetQueryParams withIsAnalysis(Boolean isAnalysis) {
        this.isAnalysis = isAnalysis;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=isMobile")
    public Boolean isMobile;
    public LatestGetV2LatestGetQueryParams withIsMobile(Boolean isMobile) {
        this.isMobile = isMobile;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public LatestGetV2LatestGetQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location")
    public Object[] location;
    public LatestGetV2LatestGetQueryParams withLocation(Object[] location) {
        this.location = location;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=location_id")
    public Long locationId;
    public LatestGetV2LatestGetQueryParams withLocationId(Long locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=manufacturerName")
    public String[] manufacturerName;
    public LatestGetV2LatestGetQueryParams withManufacturerName(String[] manufacturerName) {
        this.manufacturerName = manufacturerName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=modelName")
    public String[] modelName;
    public LatestGetV2LatestGetQueryParams withModelName(String[] modelName) {
        this.modelName = modelName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public LatestGetV2LatestGetQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order_by")
    public java.util.Map<String, Object> orderBy;
    public LatestGetV2LatestGetQueryParams withOrderBy(java.util.Map<String, Object> orderBy) {
        this.orderBy = orderBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public LatestGetV2LatestGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parameter")
    public Object[] parameter;
    public LatestGetV2LatestGetQueryParams withParameter(Object[] parameter) {
        this.parameter = parameter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parameter_id")
    public Long parameterId;
    public LatestGetV2LatestGetQueryParams withParameterId(Long parameterId) {
        this.parameterId = parameterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Long radius;
    public LatestGetV2LatestGetQueryParams withRadius(Long radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sensorType")
    public openapisdk.models.shared.SensorTypesEnum sensorType;
    public LatestGetV2LatestGetQueryParams withSensorType(openapisdk.models.shared.SensorTypesEnum sensorType) {
        this.sensorType = sensorType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public java.util.Map<String, Object> sort;
    public LatestGetV2LatestGetQueryParams withSort(java.util.Map<String, Object> sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceName")
    public String[] sourceName;
    public LatestGetV2LatestGetQueryParams withSourceName(String[] sourceName) {
        this.sourceName = sourceName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=unit")
    public String[] unit;
    public LatestGetV2LatestGetQueryParams withUnit(String[] unit) {
        this.unit = unit;
        return this;
    }
}