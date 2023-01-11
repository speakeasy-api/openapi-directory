package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsFetchAllQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public ContactsFetchAllQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=firstName")
    public String firstName;
    public ContactsFetchAllQueryParams withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lastName")
    public String lastName;
    public ContactsFetchAllQueryParams withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public ContactsFetchAllQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mobile")
    public String mobile;
    public ContactsFetchAllQueryParams withMobile(String mobile) {
        this.mobile = mobile;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public Long offset;
    public ContactsFetchAllQueryParams withOffset(Long offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=tags")
    public String tags;
    public ContactsFetchAllQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}