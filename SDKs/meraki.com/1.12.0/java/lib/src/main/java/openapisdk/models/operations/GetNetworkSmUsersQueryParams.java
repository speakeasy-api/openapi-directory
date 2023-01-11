package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSmUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=emails")
    public String[] emails;
    public GetNetworkSmUsersQueryParams withEmails(String[] emails) {
        this.emails = emails;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=ids")
    public String[] ids;
    public GetNetworkSmUsersQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=scope")
    public String[] scope;
    public GetNetworkSmUsersQueryParams withScope(String[] scope) {
        this.scope = scope;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=usernames")
    public String[] usernames;
    public GetNetworkSmUsersQueryParams withUsernames(String[] usernames) {
        this.usernames = usernames;
        return this;
    }
}