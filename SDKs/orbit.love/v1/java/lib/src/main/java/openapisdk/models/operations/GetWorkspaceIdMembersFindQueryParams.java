package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWorkspaceIdMembersFindQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public GetWorkspaceIdMembersFindQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=github")
    public String github;
    public GetWorkspaceIdMembersFindQueryParams withGithub(String github) {
        this.github = github;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public String source;
    public GetWorkspaceIdMembersFindQueryParams withSource(String source) {
        this.source = source;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source_host")
    public String sourceHost;
    public GetWorkspaceIdMembersFindQueryParams withSourceHost(String sourceHost) {
        this.sourceHost = sourceHost;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uid")
    public String uid;
    public GetWorkspaceIdMembersFindQueryParams withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=username")
    public String username;
    public GetWorkspaceIdMembersFindQueryParams withUsername(String username) {
        this.username = username;
        return this;
    }
}