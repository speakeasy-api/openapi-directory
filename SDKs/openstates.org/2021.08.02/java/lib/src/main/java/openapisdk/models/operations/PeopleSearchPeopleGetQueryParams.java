package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeopleSearchPeopleGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apikey")
    public String apikey;
    public PeopleSearchPeopleGetQueryParams withApikey(String apikey) {
        this.apikey = apikey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=district")
    public String district;
    public PeopleSearchPeopleGetQueryParams withDistrict(String district) {
        this.district = district;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String[] id;
    public PeopleSearchPeopleGetQueryParams withId(String[] id) {
        this.id = id;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public openapisdk.models.shared.PersonIncludeEnum[] include;
    public PeopleSearchPeopleGetQueryParams withInclude(openapisdk.models.shared.PersonIncludeEnum[] include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jurisdiction")
    public String jurisdiction;
    public PeopleSearchPeopleGetQueryParams withJurisdiction(String jurisdiction) {
        this.jurisdiction = jurisdiction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public PeopleSearchPeopleGetQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=org_classification")
    public openapisdk.models.shared.OrgClassificationEnum orgClassification;
    public PeopleSearchPeopleGetQueryParams withOrgClassification(openapisdk.models.shared.OrgClassificationEnum orgClassification) {
        this.orgClassification = orgClassification;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public PeopleSearchPeopleGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public PeopleSearchPeopleGetQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}