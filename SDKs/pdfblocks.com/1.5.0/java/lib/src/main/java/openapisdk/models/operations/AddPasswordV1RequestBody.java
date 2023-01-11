package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddPasswordV1RequestBody {
    @SpeakeasyMetadata("multipartForm:name=encryption_algorithm")
    public AddPasswordV1RequestBodyEncryptionAlgorithmEnum encryptionAlgorithm;
    public AddPasswordV1RequestBody withEncryptionAlgorithm(AddPasswordV1RequestBodyEncryptionAlgorithmEnum encryptionAlgorithm) {
        this.encryptionAlgorithm = encryptionAlgorithm;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public AddPasswordV1RequestBodyFile file;
    public AddPasswordV1RequestBody withFile(AddPasswordV1RequestBodyFile file) {
        this.file = file;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public AddPasswordV1RequestBody withPassword(String password) {
        this.password = password;
        return this;
    }
}