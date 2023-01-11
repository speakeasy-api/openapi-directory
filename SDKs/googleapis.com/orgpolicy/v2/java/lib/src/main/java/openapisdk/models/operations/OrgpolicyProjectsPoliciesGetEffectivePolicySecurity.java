package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OrgpolicyProjectsPoliciesGetEffectivePolicySecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2 oauth2;
    public OrgpolicyProjectsPoliciesGetEffectivePolicySecurity withOauth2(openapisdk.models.shared.SchemeOauth2 oauth2) {
        this.oauth2 = oauth2;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2c oauth2c;
    public OrgpolicyProjectsPoliciesGetEffectivePolicySecurity withOauth2c(openapisdk.models.shared.SchemeOauth2c oauth2c) {
        this.oauth2c = oauth2c;
        return this;
    }
}