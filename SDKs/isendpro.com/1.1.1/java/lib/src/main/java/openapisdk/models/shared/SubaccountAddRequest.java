package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SubaccountAddRequest {
    @JsonProperty("keyid")
    public String keyid;
    public SubaccountAddRequest withKeyid(String keyid) {
        this.keyid = keyid;
        return this;
    }
    @JsonProperty("subAccountEdit")
    public SubaccountAddRequestSubAccountEditEnum subAccountEdit;
    public SubaccountAddRequest withSubAccountEdit(SubaccountAddRequestSubAccountEditEnum subAccountEdit) {
        this.subAccountEdit = subAccountEdit;
        return this;
    }
    @JsonProperty("subAccountLogin")
    public String subAccountLogin;
    public SubaccountAddRequest withSubAccountLogin(String subAccountLogin) {
        this.subAccountLogin = subAccountLogin;
        return this;
    }
    @JsonProperty("subAccountPassword")
    public String subAccountPassword;
    public SubaccountAddRequest withSubAccountPassword(String subAccountPassword) {
        this.subAccountPassword = subAccountPassword;
        return this;
    }
}