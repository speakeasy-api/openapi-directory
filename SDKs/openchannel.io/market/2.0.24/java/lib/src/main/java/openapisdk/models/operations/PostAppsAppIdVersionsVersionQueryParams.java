package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsAppIdVersionsVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access")
    public String access;
    public PostAppsAppIdVersionsVersionQueryParams withAccess(String access) {
        this.access = access;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allow")
    public String allow;
    public PostAppsAppIdVersionsVersionQueryParams withAllow(String allow) {
        this.allow = allow;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=approvalRequired")
    public String approvalRequired;
    public PostAppsAppIdVersionsVersionQueryParams withApprovalRequired(String approvalRequired) {
        this.approvalRequired = approvalRequired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=attributes")
    public String attributes;
    public PostAppsAppIdVersionsVersionQueryParams withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PostAppsAppIdVersionsVersionQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=developerId")
    public String developerId;
    public PostAppsAppIdVersionsVersionQueryParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model")
    public String model;
    public PostAppsAppIdVersionsVersionQueryParams withModel(String model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public PostAppsAppIdVersionsVersionQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=restrict")
    public String restrict;
    public PostAppsAppIdVersionsVersionQueryParams withRestrict(String restrict) {
        this.restrict = restrict;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public PostAppsAppIdVersionsVersionQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}