package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=company")
    public String company;
    public GetEventsQueryParams withCompany(String company) {
        this.company = company;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=deal")
    public String deal;
    public GetEventsQueryParams withDeal(String deal) {
        this.deal = deal;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nexttoken")
    public String nexttoken;
    public GetEventsQueryParams withNexttoken(String nexttoken) {
        this.nexttoken = nexttoken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=queryexecutionid")
    public String queryexecutionid;
    public GetEventsQueryParams withQueryexecutionid(String queryexecutionid) {
        this.queryexecutionid = queryexecutionid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=site")
    public String site;
    public GetEventsQueryParams withSite(String site) {
        this.site = site;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetEventsTypeEnum type;
    public GetEventsQueryParams withType(GetEventsTypeEnum type) {
        this.type = type;
        return this;
    }
}