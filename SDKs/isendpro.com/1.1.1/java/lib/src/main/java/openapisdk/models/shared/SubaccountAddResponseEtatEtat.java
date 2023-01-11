package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubaccountAddResponseEtatEtat {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public Double code;
    public SubaccountAddResponseEtatEtat withCode(Double code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public SubaccountAddResponseEtatEtat withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subAccountId")
    public String subAccountId;
    public SubaccountAddResponseEtatEtat withSubAccountId(String subAccountId) {
        this.subAccountId = subAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subAccountKeyId")
    public String subAccountKeyId;
    public SubaccountAddResponseEtatEtat withSubAccountKeyId(String subAccountKeyId) {
        this.subAccountKeyId = subAccountKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subAccountLogin")
    public String subAccountLogin;
    public SubaccountAddResponseEtatEtat withSubAccountLogin(String subAccountLogin) {
        this.subAccountLogin = subAccountLogin;
        return this;
    }
}