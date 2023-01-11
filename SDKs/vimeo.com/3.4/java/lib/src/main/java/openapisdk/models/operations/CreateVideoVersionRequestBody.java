package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateVideoVersionRequestBody {
    @JsonProperty("file_name")
    public String fileName;
    public CreateVideoVersionRequestBody withFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }
    @JsonProperty("upload")
    public CreateVideoVersionRequestBodyUpload upload;
    public CreateVideoVersionRequestBody withUpload(CreateVideoVersionRequestBodyUpload upload) {
        this.upload = upload;
        return this;
    }
}