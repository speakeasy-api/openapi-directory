package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAppsAppIdVersionsVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access")
    public String access;
    public PatchAppsAppIdVersionsVersionQueryParams withAccess(String access) {
        this.access = access;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=allow")
    public String allow;
    public PatchAppsAppIdVersionsVersionQueryParams withAllow(String allow) {
        this.allow = allow;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=approvalRequired")
    public String approvalRequired;
    public PatchAppsAppIdVersionsVersionQueryParams withApprovalRequired(String approvalRequired) {
        this.approvalRequired = approvalRequired;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=attributes")
    public String attributes;
    public PatchAppsAppIdVersionsVersionQueryParams withAttributes(String attributes) {
        this.attributes = attributes;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PatchAppsAppIdVersionsVersionQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=developerId")
    public String developerId;
    public PatchAppsAppIdVersionsVersionQueryParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=model")
    public String model;
    public PatchAppsAppIdVersionsVersionQueryParams withModel(String model) {
        this.model = model;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public PatchAppsAppIdVersionsVersionQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=restrict")
    public String restrict;
    public PatchAppsAppIdVersionsVersionQueryParams withRestrict(String restrict) {
        this.restrict = restrict;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public PatchAppsAppIdVersionsVersionQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}