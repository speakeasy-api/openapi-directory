package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access")
    public String access;
    public PostAppsQueryParams withAccess(String access) {
        this.access = access;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allow")
    public String allow;
    public PostAppsQueryParams withAllow(String allow) {
        this.allow = allow;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=attributes")
    public String attributes;
    public PostAppsQueryParams withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PostAppsQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=developerId")
    public String developerId;
    public PostAppsQueryParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model")
    public String model;
    public PostAppsQueryParams withModel(String model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public PostAppsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=restrict")
    public String restrict;
    public PostAppsQueryParams withRestrict(String restrict) {
        this.restrict = restrict;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public PostAppsQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}