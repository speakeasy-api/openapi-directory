package openapisdk.models.operations;



public class ChangeAccountSettingsResponse {
    public byte[] body;
    public ChangeAccountSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ChangeAccountSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChangeAccountSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.AccountSettings accountSettings;
    public ChangeAccountSettingsResponse withAccountSettings(openapisdk.models.shared.AccountSettings accountSettings) {
        this.accountSettings = accountSettings;
        return this;
    }
}