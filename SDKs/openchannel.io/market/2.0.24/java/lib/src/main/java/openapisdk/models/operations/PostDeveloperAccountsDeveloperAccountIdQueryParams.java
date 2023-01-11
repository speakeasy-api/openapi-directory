package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeveloperAccountsDeveloperAccountIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PostDeveloperAccountsDeveloperAccountIdQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=developerId")
    public String developerId;
    public PostDeveloperAccountsDeveloperAccountIdQueryParams withDeveloperId(String developerId) {
        this.developerId = developerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public PostDeveloperAccountsDeveloperAccountIdQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public PostDeveloperAccountsDeveloperAccountIdQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}