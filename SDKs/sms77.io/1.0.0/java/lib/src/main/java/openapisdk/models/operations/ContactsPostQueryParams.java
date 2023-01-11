package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action")
    public ContactsPostActionEnum action;
    public ContactsPostQueryParams withAction(ContactsPostActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public ContactsPostQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=empfaenger")
    public String empfaenger;
    public ContactsPostQueryParams withEmpfaenger(String empfaenger) {
        this.empfaenger = empfaenger;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public ContactsPostQueryParams withId(String id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=json")
    public Double json;
    public ContactsPostQueryParams withJson(Double json) {
        this.json = json;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nick")
    public String nick;
    public ContactsPostQueryParams withNick(String nick) {
        this.nick = nick;
        return this;
    }
}