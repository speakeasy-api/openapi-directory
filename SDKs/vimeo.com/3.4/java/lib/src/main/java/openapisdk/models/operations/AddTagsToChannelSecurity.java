package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTagsToChannelSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauth2 oauth2;
    public AddTagsToChannelSecurity withOauth2(openapisdk.models.shared.SchemeOauth2 oauth2) {
        this.oauth2 = oauth2;
        return this;
    }
}