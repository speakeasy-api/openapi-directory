package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TeamsListDiscussionCommentsLegacyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=direction")
    public openapisdk.models.shared.DirectionEnum direction;
    public TeamsListDiscussionCommentsLegacyQueryParams withDirection(openapisdk.models.shared.DirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public TeamsListDiscussionCommentsLegacyQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public TeamsListDiscussionCommentsLegacyQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
}