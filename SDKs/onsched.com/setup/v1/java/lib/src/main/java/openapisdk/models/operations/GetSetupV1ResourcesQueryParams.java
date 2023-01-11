package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1ResourcesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deleted")
    public Boolean deleted;
    public GetSetupV1ResourcesQueryParams withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public GetSetupV1ResourcesQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=googleAuthReturnUrl")
    public String googleAuthReturnUrl;
    public GetSetupV1ResourcesQueryParams withGoogleAuthReturnUrl(String googleAuthReturnUrl) {
        this.googleAuthReturnUrl = googleAuthReturnUrl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetSetupV1ResourcesQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locationId")
    public String locationId;
    public GetSetupV1ResourcesQueryParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetSetupV1ResourcesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Integer offset;
    public GetSetupV1ResourcesQueryParams withOffset(Integer offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=outlookAuthReturnUrl")
    public String outlookAuthReturnUrl;
    public GetSetupV1ResourcesQueryParams withOutlookAuthReturnUrl(String outlookAuthReturnUrl) {
        this.outlookAuthReturnUrl = outlookAuthReturnUrl;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=resourceGroupId")
    public String resourceGroupId;
    public GetSetupV1ResourcesQueryParams withResourceGroupId(String resourceGroupId) {
        this.resourceGroupId = resourceGroupId;
        return this;
    }
}