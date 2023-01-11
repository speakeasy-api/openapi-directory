package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeOtoroshiAuth {
    @SpeakeasyMetadata("security:name=password")
    public String password;
    public SchemeOtoroshiAuth withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("security:name=username")
    public String username;
    public SchemeOtoroshiAuth withUsername(String username) {
        this.username = username;
        return this;
    }
}