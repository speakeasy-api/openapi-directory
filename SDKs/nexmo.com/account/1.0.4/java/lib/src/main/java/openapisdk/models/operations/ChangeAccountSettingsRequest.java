package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ChangeAccountSettingsRequest {
    public String serverURL;
    public ChangeAccountSettingsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ChangeAccountSettingsQueryParams queryParams;
    public ChangeAccountSettingsRequest withQueryParams(ChangeAccountSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.AccountSettingsRequest request;
    public ChangeAccountSettingsRequest withRequest(openapisdk.models.shared.AccountSettingsRequest request) {
        this.request = request;
        return this;
    }
}