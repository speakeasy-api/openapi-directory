package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationApiRequestsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=adminId")
    public String adminId;
    public GetOrganizationApiRequestsQueryParams withAdminId(String adminId) {
        this.adminId = adminId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=endingBefore")
    public String endingBefore;
    public GetOrganizationApiRequestsQueryParams withEndingBefore(String endingBefore) {
        this.endingBefore = endingBefore;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=method")
    public String method;
    public GetOrganizationApiRequestsQueryParams withMethod(String method) {
        this.method = method;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=path")
    public String path;
    public GetOrganizationApiRequestsQueryParams withPath(String path) {
        this.path = path;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=perPage")
    public Long perPage;
    public GetOrganizationApiRequestsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=responseCode")
    public Long responseCode;
    public GetOrganizationApiRequestsQueryParams withResponseCode(Long responseCode) {
        this.responseCode = responseCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sourceIp")
    public String sourceIp;
    public GetOrganizationApiRequestsQueryParams withSourceIp(String sourceIp) {
        this.sourceIp = sourceIp;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=startingAfter")
    public String startingAfter;
    public GetOrganizationApiRequestsQueryParams withStartingAfter(String startingAfter) {
        this.startingAfter = startingAfter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t0")
    public String t0;
    public GetOrganizationApiRequestsQueryParams withT0(String t0) {
        this.t0 = t0;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=t1")
    public String t1;
    public GetOrganizationApiRequestsQueryParams withT1(String t1) {
        this.t1 = t1;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timespan")
    public Float timespan;
    public GetOrganizationApiRequestsQueryParams withTimespan(Float timespan) {
        this.timespan = timespan;
        return this;
    }
}