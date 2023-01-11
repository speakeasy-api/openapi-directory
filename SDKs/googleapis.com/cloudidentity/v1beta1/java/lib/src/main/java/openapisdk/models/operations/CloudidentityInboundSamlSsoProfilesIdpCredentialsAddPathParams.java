package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloudidentityInboundSamlSsoProfilesIdpCredentialsAddPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public CloudidentityInboundSamlSsoProfilesIdpCredentialsAddPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}