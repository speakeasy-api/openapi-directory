package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTagQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public CreateTagQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public CreateTagQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public CreateTagTypeEnum type;
    public CreateTagQueryParams withType(CreateTagTypeEnum type) {
        this.type = type;
        return this;
    }
}