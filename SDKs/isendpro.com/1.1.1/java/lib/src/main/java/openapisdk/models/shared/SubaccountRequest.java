package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SubaccountRequest {
    @JsonProperty("keyid")
    public String keyid;
    public SubaccountRequest withKeyid(String keyid) {
        this.keyid = keyid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subAccountAddCredit")
    public String subAccountAddCredit;
    public SubaccountRequest withSubAccountAddCredit(String subAccountAddCredit) {
        this.subAccountAddCredit = subAccountAddCredit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subAccountCountryCode")
    public String subAccountCountryCode;
    public SubaccountRequest withSubAccountCountryCode(String subAccountCountryCode) {
        this.subAccountCountryCode = subAccountCountryCode;
        return this;
    }
    @JsonProperty("subAccountEdit")
    public SubaccountRequestSubAccountEditEnum subAccountEdit;
    public SubaccountRequest withSubAccountEdit(SubaccountRequestSubAccountEditEnum subAccountEdit) {
        this.subAccountEdit = subAccountEdit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subAccountKeyId")
    public String subAccountKeyId;
    public SubaccountRequest withSubAccountKeyId(String subAccountKeyId) {
        this.subAccountKeyId = subAccountKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subAccountPrice")
    public String subAccountPrice;
    public SubaccountRequest withSubAccountPrice(String subAccountPrice) {
        this.subAccountPrice = subAccountPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subAccountRestrictionStop")
    public SubaccountRequestSubAccountRestrictionStopEnum subAccountRestrictionStop;
    public SubaccountRequest withSubAccountRestrictionStop(SubaccountRequestSubAccountRestrictionStopEnum subAccountRestrictionStop) {
        this.subAccountRestrictionStop = subAccountRestrictionStop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subAccountRestrictionTime")
    public SubaccountRequestSubAccountRestrictionTimeEnum subAccountRestrictionTime;
    public SubaccountRequest withSubAccountRestrictionTime(SubaccountRequestSubAccountRestrictionTimeEnum subAccountRestrictionTime) {
        this.subAccountRestrictionTime = subAccountRestrictionTime;
        return this;
    }
}