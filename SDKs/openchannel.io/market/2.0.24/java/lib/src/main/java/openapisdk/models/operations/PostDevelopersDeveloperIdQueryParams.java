package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDevelopersDeveloperIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PostDevelopersDeveloperIdQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public PostDevelopersDeveloperIdQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public PostDevelopersDeveloperIdQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public PostDevelopersDeveloperIdQueryParams withType(String type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=username")
    public String username;
    public PostDevelopersDeveloperIdQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
}