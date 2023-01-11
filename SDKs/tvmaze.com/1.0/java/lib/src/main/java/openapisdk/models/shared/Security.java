package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public SchemeUsertoken usertoken;
    public Security withUsertoken(SchemeUsertoken usertoken) {
        this.usertoken = usertoken;
        return this;
    }
}