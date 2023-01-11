package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action")
    public ContactsGetActionEnum action;
    public ContactsGetQueryParams withAction(ContactsGetActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=json")
    public Double json;
    public ContactsGetQueryParams withJson(Double json) {
        this.json = json;
        return this;
    }
}