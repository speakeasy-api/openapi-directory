package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGenericObjectByTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetGenericObjectByTypePathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public GetGenericObjectByTypeTypeEnum type;
    public GetGenericObjectByTypePathParams withType(GetGenericObjectByTypeTypeEnum type) {
        this.type = type;
        return this;
    }
}