package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeRpcAuth {
    @SpeakeasyMetadata("security:name=password")
    public String password;
    public SchemeRpcAuth withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("security:name=username")
    public String username;
    public SchemeRpcAuth withUsername(String username) {
        this.username = username;
        return this;
    }
}