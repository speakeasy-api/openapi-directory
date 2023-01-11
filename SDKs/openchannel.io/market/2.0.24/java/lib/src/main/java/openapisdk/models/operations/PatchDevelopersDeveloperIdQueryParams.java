package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchDevelopersDeveloperIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=customData")
    public String customData;
    public PatchDevelopersDeveloperIdQueryParams withCustomData(String customData) {
        this.customData = customData;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public PatchDevelopersDeveloperIdQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public PatchDevelopersDeveloperIdQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public PatchDevelopersDeveloperIdQueryParams withType(String type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=username")
    public String username;
    public PatchDevelopersDeveloperIdQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
}