package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeepLinksSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeAuth auth;
    public DeepLinksSecurity withAuth(openapisdk.models.shared.SchemeAuth auth) {
        this.auth = auth;
        return this;
    }
}