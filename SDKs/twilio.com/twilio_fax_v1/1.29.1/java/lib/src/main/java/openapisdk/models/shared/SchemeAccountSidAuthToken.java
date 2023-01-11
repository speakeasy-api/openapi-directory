package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeAccountSidAuthToken {
    @SpeakeasyMetadata("security:name=password")
    public String password;
    public SchemeAccountSidAuthToken withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("security:name=username")
    public String username;
    public SchemeAccountSidAuthToken withUsername(String username) {
        this.username = username;
        return this;
    }
}