package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeUsertoken {
    @SpeakeasyMetadata("security:name=password")
    public String password;
    public SchemeUsertoken withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("security:name=username")
    public String username;
    public SchemeUsertoken withUsername(String username) {
        this.username = username;
        return this;
    }
}