package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class ListConferenceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreated")
    public LocalDate dateCreated;
    public ListConferenceQueryParams withDateCreated(LocalDate dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreated<")
    public LocalDate dateCreatedLessThan;
    public ListConferenceQueryParams withDateCreatedLessThan(LocalDate dateCreatedLessThan) {
        this.dateCreatedLessThan = dateCreatedLessThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateCreated>")
    public LocalDate dateCreatedGreaterThan;
    public ListConferenceQueryParams withDateCreatedGreaterThan(LocalDate dateCreatedGreaterThan) {
        this.dateCreatedGreaterThan = dateCreatedGreaterThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateUpdated")
    public LocalDate dateUpdated;
    public ListConferenceQueryParams withDateUpdated(LocalDate dateUpdated) {
        this.dateUpdated = dateUpdated;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateUpdated<")
    public LocalDate dateUpdatedLessThan;
    public ListConferenceQueryParams withDateUpdatedLessThan(LocalDate dateUpdatedLessThan) {
        this.dateUpdatedLessThan = dateUpdatedLessThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DateUpdated>")
    public LocalDate dateUpdatedGreaterThan;
    public ListConferenceQueryParams withDateUpdatedGreaterThan(LocalDate dateUpdatedGreaterThan) {
        this.dateUpdatedGreaterThan = dateUpdatedGreaterThan;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListConferenceQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListConferenceQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public openapisdk.models.shared.ConferenceEnumStatusEnum status;
    public ListConferenceQueryParams withStatus(openapisdk.models.shared.ConferenceEnumStatusEnum status) {
        this.status = status;
        return this;
    }
}