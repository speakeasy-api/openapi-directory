package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetupV1CompaniesEmailTemplatesTemplateNamePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=templateName")
    public String templateName;
    public GetSetupV1CompaniesEmailTemplatesTemplateNamePathParams withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}