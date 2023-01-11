package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListConferenceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ConferenceSid")
    public String conferenceSid;
    public ListConferenceQueryParams withConferenceSid(String conferenceSid) {
        this.conferenceSid = conferenceSid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CreatedAfter")
    public String createdAfter;
    public ListConferenceQueryParams withCreatedAfter(String createdAfter) {
        this.createdAfter = createdAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CreatedBefore")
    public String createdBefore;
    public ListConferenceQueryParams withCreatedBefore(String createdBefore) {
        this.createdBefore = createdBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DetectedIssues")
    public String detectedIssues;
    public ListConferenceQueryParams withDetectedIssues(String detectedIssues) {
        this.detectedIssues = detectedIssues;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndReason")
    public String endReason;
    public ListConferenceQueryParams withEndReason(String endReason) {
        this.endReason = endReason;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FriendlyName")
    public String friendlyName;
    public ListConferenceQueryParams withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=MixerRegion")
    public String mixerRegion;
    public ListConferenceQueryParams withMixerRegion(String mixerRegion) {
        this.mixerRegion = mixerRegion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PageSize")
    public Long pageSize;
    public ListConferenceQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Status")
    public String status;
    public ListConferenceQueryParams withStatus(String status) {
        this.status = status;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Subaccount")
    public String subaccount;
    public ListConferenceQueryParams withSubaccount(String subaccount) {
        this.subaccount = subaccount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Tags")
    public String tags;
    public ListConferenceQueryParams withTags(String tags) {
        this.tags = tags;
        return this;
    }
}