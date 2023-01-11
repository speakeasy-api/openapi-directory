package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeUserSecurity {
    @SpeakeasyMetadata("security:name=password")
    public String password;
    public SchemeUserSecurity withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("security:name=username")
    public String username;
    public SchemeUserSecurity withUsername(String username) {
        this.username = username;
        return this;
    }
}