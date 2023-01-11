package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommitteeListCommitteesGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apikey")
    public String apikey;
    public CommitteeListCommitteesGetQueryParams withApikey(String apikey) {
        this.apikey = apikey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=chamber")
    public openapisdk.models.shared.OrgClassificationEnum chamber;
    public CommitteeListCommitteesGetQueryParams withChamber(openapisdk.models.shared.OrgClassificationEnum chamber) {
        this.chamber = chamber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=classification")
    public openapisdk.models.shared.CommitteeClassificationEnum classification;
    public CommitteeListCommitteesGetQueryParams withClassification(openapisdk.models.shared.CommitteeClassificationEnum classification) {
        this.classification = classification;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public openapisdk.models.shared.CommitteeIncludeEnum[] include;
    public CommitteeListCommitteesGetQueryParams withInclude(openapisdk.models.shared.CommitteeIncludeEnum[] include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jurisdiction")
    public String jurisdiction;
    public CommitteeListCommitteesGetQueryParams withJurisdiction(String jurisdiction) {
        this.jurisdiction = jurisdiction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public CommitteeListCommitteesGetQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=parent")
    public String parent;
    public CommitteeListCommitteesGetQueryParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public CommitteeListCommitteesGetQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}