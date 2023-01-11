package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecretScanningListAlertsForRepoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public SecretScanningListAlertsForRepoQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public SecretScanningListAlertsForRepoQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public openapisdk.models.shared.RepoEnum7 state;
    public SecretScanningListAlertsForRepoQueryParams withState(openapisdk.models.shared.RepoEnum7 state) {
        this.state = state;
        return this;
    }
}