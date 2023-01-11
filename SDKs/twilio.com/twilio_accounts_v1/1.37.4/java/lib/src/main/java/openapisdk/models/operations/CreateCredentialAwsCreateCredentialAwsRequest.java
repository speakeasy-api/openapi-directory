package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCredentialAwsCreateCredentialAwsRequest {
    @SpeakeasyMetadata("form:name=AccountSid")
    public String accountSid;
    public CreateCredentialAwsCreateCredentialAwsRequest withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @SpeakeasyMetadata("form:name=Credentials")
    public String credentials;
    public CreateCredentialAwsCreateCredentialAwsRequest withCredentials(String credentials) {
        this.credentials = credentials;
        return this;
    }
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;
    public CreateCredentialAwsCreateCredentialAwsRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
}