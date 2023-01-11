package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchDeveloperAccountsDeveloperAccountIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PatchDeveloperAccountsDeveloperAccountIdQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=developerId")
    public String developerId;
    public PatchDeveloperAccountsDeveloperAccountIdQueryParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public PatchDeveloperAccountsDeveloperAccountIdQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public PatchDeveloperAccountsDeveloperAccountIdQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}