package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreditQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=credit")
    public GetCreditCreditEnum credit;
    public GetCreditQueryParams withCredit(GetCreditCreditEnum credit) {
        this.credit = credit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=keyid")
    public String keyid;
    public GetCreditQueryParams withKeyid(String keyid) {
        this.keyid = keyid;
        return this;
    }
}