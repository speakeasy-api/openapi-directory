package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMemberUpdateMemberRequest {
    @SpeakeasyMetadata("form:name=Method")
    public UpdateMemberUpdateMemberRequestMethodEnum method;
    public UpdateMemberUpdateMemberRequest withMethod(UpdateMemberUpdateMemberRequestMethodEnum method) {
        this.method = method;
        return this;
    }
    @SpeakeasyMetadata("form:name=Url")
    public String url;
    public UpdateMemberUpdateMemberRequest withUrl(String url) {
        this.url = url;
        return this;
    }
}