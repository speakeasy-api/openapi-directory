package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPayeesV4QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=disabled")
    public Boolean disabled;
    public ListPayeesV4QueryParams withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=displayName")
    public String displayName;
    public ListPayeesV4QueryParams withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public ListPayeesV4QueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ofacStatus")
    public openapisdk.models.shared.OfacStatusEnum ofacStatus;
    public ListPayeesV4QueryParams withOfacStatus(openapisdk.models.shared.OfacStatusEnum ofacStatus) {
        this.ofacStatus = ofacStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=onboardedStatus")
    public openapisdk.models.shared.OnboardedStatusEnum onboardedStatus;
    public ListPayeesV4QueryParams withOnboardedStatus(openapisdk.models.shared.OnboardedStatusEnum onboardedStatus) {
        this.onboardedStatus = onboardedStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public ListPayeesV4QueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Integer pageSize;
    public ListPayeesV4QueryParams withPageSize(Integer pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payeeCountry")
    public String payeeCountry;
    public ListPayeesV4QueryParams withPayeeCountry(String payeeCountry) {
        this.payeeCountry = payeeCountry;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payeeType")
    public openapisdk.models.shared.PayeeTypeEnum payeeType;
    public ListPayeesV4QueryParams withPayeeType(openapisdk.models.shared.PayeeTypeEnum payeeType) {
        this.payeeType = payeeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payorId")
    public String payorId;
    public ListPayeesV4QueryParams withPayorId(String payorId) {
        this.payorId = payorId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=remoteId")
    public String remoteId;
    public ListPayeesV4QueryParams withRemoteId(String remoteId) {
        this.remoteId = remoteId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String sort;
    public ListPayeesV4QueryParams withSort(String sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=watchlistStatus")
    public openapisdk.models.shared.WatchlistStatusEnum watchlistStatus;
    public ListPayeesV4QueryParams withWatchlistStatus(openapisdk.models.shared.WatchlistStatusEnum watchlistStatus) {
        this.watchlistStatus = watchlistStatus;
        return this;
    }
}