package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveBgMultipartImageFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public RemoveBgMultipartImageFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=image_file")
    public String imageFile;
    public RemoveBgMultipartImageFile withImageFile(String imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}