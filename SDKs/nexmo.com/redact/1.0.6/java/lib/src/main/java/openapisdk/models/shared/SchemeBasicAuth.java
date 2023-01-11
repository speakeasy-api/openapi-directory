package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeBasicAuth {
    @SpeakeasyMetadata("security:name=password")
    public String password;
    public SchemeBasicAuth withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("security:name=username")
    public String username;
    public SchemeBasicAuth withUsername(String username) {
        this.username = username;
        return this;
    }
}