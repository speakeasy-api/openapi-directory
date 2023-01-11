package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveBgMultipartBgImageFile {
    @SpeakeasyMetadata("multipartForm:name=bg_image_file")
    public String bgImageFile;
    public RemoveBgMultipartBgImageFile withBgImageFile(String bgImageFile) {
        this.bgImageFile = bgImageFile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:content")
    public byte[] content;
    public RemoveBgMultipartBgImageFile withContent(byte[] content) {
        this.content = content;
        return this;
    }
}