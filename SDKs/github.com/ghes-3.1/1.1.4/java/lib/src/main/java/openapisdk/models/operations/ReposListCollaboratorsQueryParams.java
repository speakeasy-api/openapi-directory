package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposListCollaboratorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=affiliation")
    public openapisdk.models.shared.RepoEnum affiliation;
    public ReposListCollaboratorsQueryParams withAffiliation(openapisdk.models.shared.RepoEnum affiliation) {
        this.affiliation = affiliation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReposListCollaboratorsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReposListCollaboratorsQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}