package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class ImprovementProgramMultipart {
    @SpeakeasyMetadata("multipartForm:file")
    public ImprovementProgramMultipartImageFile imageFile;
    public ImprovementProgramMultipart withImageFile(ImprovementProgramMultipartImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=image_file_b64")
    public String imageFileB64;
    public ImprovementProgramMultipart withImageFileB64(String imageFileB64) {
        this.imageFileB64 = imageFileB64;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=image_filename")
    public String imageFilename;
    public ImprovementProgramMultipart withImageFilename(String imageFilename) {
        this.imageFilename = imageFilename;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=image_url")
    public String imageUrl;
    public ImprovementProgramMultipart withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=tag")
    public String tag;
    public ImprovementProgramMultipart withTag(String tag) {
        this.tag = tag;
        return this;
    }
}