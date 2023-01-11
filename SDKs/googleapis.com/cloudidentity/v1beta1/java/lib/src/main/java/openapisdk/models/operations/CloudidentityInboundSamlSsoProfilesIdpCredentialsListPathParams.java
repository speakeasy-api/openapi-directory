package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityInboundSamlSsoProfilesIdpCredentialsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}