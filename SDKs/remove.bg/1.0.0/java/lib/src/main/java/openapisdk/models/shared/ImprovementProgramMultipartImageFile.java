package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class ImprovementProgramMultipartImageFile {
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public ImprovementProgramMultipartImageFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=image_file")
    public String imageFile;
    public ImprovementProgramMultipartImageFile withImageFile(String imageFile) {
        this.imageFile = imageFile;
        return this;
    }
}