package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BillsSearchBillsGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action_since")
    public String actionSince;
    public BillsSearchBillsGetQueryParams withActionSince(String actionSince) {
        this.actionSince = actionSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apikey")
    public String apikey;
    public BillsSearchBillsGetQueryParams withApikey(String apikey) {
        this.apikey = apikey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=chamber")
    public String chamber;
    public BillsSearchBillsGetQueryParams withChamber(String chamber) {
        this.chamber = chamber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=classification")
    public String classification;
    public BillsSearchBillsGetQueryParams withClassification(String classification) {
        this.classification = classification;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=created_since")
    public String createdSince;
    public BillsSearchBillsGetQueryParams withCreatedSince(String createdSince) {
        this.createdSince = createdSince;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public openapisdk.models.shared.BillIncludeEnum[] include;
    public BillsSearchBillsGetQueryParams withInclude(openapisdk.models.shared.BillIncludeEnum[] include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jurisdiction")
    public String jurisdiction;
    public BillsSearchBillsGetQueryParams withJurisdiction(String jurisdiction) {
        this.jurisdiction = jurisdiction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public BillsSearchBillsGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public BillsSearchBillsGetQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public BillsSearchBillsGetQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=session")
    public String session;
    public BillsSearchBillsGetQueryParams withSession(String session) {
        this.session = session;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public java.util.Map<String, Object> sort;
    public BillsSearchBillsGetQueryParams withSort(java.util.Map<String, Object> sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sponsor")
    public String sponsor;
    public BillsSearchBillsGetQueryParams withSponsor(String sponsor) {
        this.sponsor = sponsor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sponsor_classification")
    public String sponsorClassification;
    public BillsSearchBillsGetQueryParams withSponsorClassification(String sponsorClassification) {
        this.sponsorClassification = sponsorClassification;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=subject")
    public String[] subject;
    public BillsSearchBillsGetQueryParams withSubject(String[] subject) {
        this.subject = subject;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=updated_since")
    public String updatedSince;
    public BillsSearchBillsGetQueryParams withUpdatedSince(String updatedSince) {
        this.updatedSince = updatedSince;
        return this;
    }
}