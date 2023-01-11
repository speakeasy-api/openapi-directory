package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest {
    public PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams pathParams;
    public PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest withPathParams(PeopleOtherContactsCopyOtherContactToMyContactsGroupPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams queryParams;
    public PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest withQueryParams(PeopleOtherContactsCopyOtherContactToMyContactsGroupQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CopyOtherContactToMyContactsGroupRequest request;
    public PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest withRequest(openapisdk.models.shared.CopyOtherContactToMyContactsGroupRequest request) {
        this.request = request;
        return this;
    }
    public PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity security;
    public PeopleOtherContactsCopyOtherContactToMyContactsGroupRequest withSecurity(PeopleOtherContactsCopyOtherContactToMyContactsGroupSecurity security) {
        this.security = security;
        return this;
    }
}