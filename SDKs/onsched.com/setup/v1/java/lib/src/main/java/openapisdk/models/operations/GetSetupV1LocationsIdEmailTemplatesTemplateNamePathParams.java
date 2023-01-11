package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1LocationsIdEmailTemplatesTemplateNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetSetupV1LocationsIdEmailTemplatesTemplateNamePathParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateName")
    public String templateName;
    public GetSetupV1LocationsIdEmailTemplatesTemplateNamePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}