package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReactionsListForTeamDiscussionLegacyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=content")
    public openapisdk.models.shared.DiscussionNumberEnum content;
    public ReactionsListForTeamDiscussionLegacyQueryParams withContent(openapisdk.models.shared.DiscussionNumberEnum content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public ReactionsListForTeamDiscussionLegacyQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public ReactionsListForTeamDiscussionLegacyQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}