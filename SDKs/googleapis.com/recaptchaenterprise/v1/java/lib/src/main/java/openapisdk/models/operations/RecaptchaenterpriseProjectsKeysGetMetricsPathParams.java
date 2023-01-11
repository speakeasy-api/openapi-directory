package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsKeysGetMetricsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public RecaptchaenterpriseProjectsKeysGetMetricsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}