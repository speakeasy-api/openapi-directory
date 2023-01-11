package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JsonRpcSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeRpcAuth rpcAuth;
    public JsonRpcSecurity withRpcAuth(openapisdk.models.shared.SchemeRpcAuth rpcAuth) {
        this.rpcAuth = rpcAuth;
        return this;
    }
}