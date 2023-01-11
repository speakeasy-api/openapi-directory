package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UnsubscribeUserNotificationSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeMwoAuth mwoAuth;
    public UnsubscribeUserNotificationSecurity withMwoAuth(openapisdk.models.shared.SchemeMwoAuth mwoAuth) {
        this.mwoAuth = mwoAuth;
        return this;
    }
}