package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CompilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=template-token")
    public String templateToken;
    public CompilePathParams withTemplateToken(String templateToken) {
        this.templateToken = templateToken;
        return this;
    }
}