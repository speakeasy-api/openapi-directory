package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemovePasswordV1RequestBody {
    @SpeakeasyMetadata("multipartForm:file")
    public RemovePasswordV1RequestBodyFile file;
    public RemovePasswordV1RequestBody withFile(RemovePasswordV1RequestBodyFile file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public RemovePasswordV1RequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
}