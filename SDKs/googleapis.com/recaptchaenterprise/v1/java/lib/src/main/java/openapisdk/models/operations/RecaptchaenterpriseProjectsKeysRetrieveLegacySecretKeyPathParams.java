package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=key")
    public String key;
    public RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyPathParams withKey(String key) {
        this.key = key;
        return this;
    }
}