package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsKeysDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RecaptchaenterpriseProjectsKeysDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}