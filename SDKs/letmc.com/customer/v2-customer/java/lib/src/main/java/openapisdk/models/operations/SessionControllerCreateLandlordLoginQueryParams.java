package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SessionControllerCreateLandlordLoginQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=branchID")
    public String branchID;
    public SessionControllerCreateLandlordLoginQueryParams withBranchId(String branchID) {
        this.branchID = branchID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=contactDetails")
    public String contactDetails;
    public SessionControllerCreateLandlordLoginQueryParams withContactDetails(String contactDetails) {
        this.contactDetails = contactDetails;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public SessionControllerCreateLandlordLoginQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=forename")
    public String forename;
    public SessionControllerCreateLandlordLoginQueryParams withForename(String forename) {
        this.forename = forename;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=propertyAddress")
    public String propertyAddress;
    public SessionControllerCreateLandlordLoginQueryParams withPropertyAddress(String propertyAddress) {
        this.propertyAddress = propertyAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=surname")
    public String surname;
    public SessionControllerCreateLandlordLoginQueryParams withSurname(String surname) {
        this.surname = surname;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=title")
    public String title;
    public SessionControllerCreateLandlordLoginQueryParams withTitle(String title) {
        this.title = title;
        return this;
    }
}