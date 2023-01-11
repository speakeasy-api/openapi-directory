package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveBgMultipart {
    @SpeakeasyMetadata("multipartForm:name=add_shadow")
    public Boolean addShadow;
    public RemoveBgMultipart withAddShadow(Boolean addShadow) {
        this.addShadow = addShadow;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=bg_color")
    public String bgColor;
    public RemoveBgMultipart withBgColor(String bgColor) {
        this.bgColor = bgColor;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public RemoveBgMultipartBgImageFile bgImageFile;
    public RemoveBgMultipart withBgImageFile(RemoveBgMultipartBgImageFile bgImageFile) {
        this.bgImageFile = bgImageFile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=bg_image_url")
    public String bgImageUrl;
    public RemoveBgMultipart withBgImageUrl(String bgImageUrl) {
        this.bgImageUrl = bgImageUrl;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=channels")
    public RemoveBgMultipartChannelsEnum channels;
    public RemoveBgMultipart withChannels(RemoveBgMultipartChannelsEnum channels) {
        this.channels = channels;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=crop")
    public Boolean crop;
    public RemoveBgMultipart withCrop(Boolean crop) {
        this.crop = crop;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=crop_margin")
    public String cropMargin;
    public RemoveBgMultipart withCropMargin(String cropMargin) {
        this.cropMargin = cropMargin;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=format")
    public RemoveBgMultipartFormatEnum format;
    public RemoveBgMultipart withFormat(RemoveBgMultipartFormatEnum format) {
        this.format = format;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:file")
    public RemoveBgMultipartImageFile imageFile;
    public RemoveBgMultipart withImageFile(RemoveBgMultipartImageFile imageFile) {
        this.imageFile = imageFile;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=image_file_b64")
    public String imageFileB64;
    public RemoveBgMultipart withImageFileB64(String imageFileB64) {
        this.imageFileB64 = imageFileB64;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=image_url")
    public String imageUrl;
    public RemoveBgMultipart withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=position")
    public String position;
    public RemoveBgMultipart withPosition(String position) {
        this.position = position;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=roi")
    public String roi;
    public RemoveBgMultipart withRoi(String roi) {
        this.roi = roi;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=scale")
    public String scale;
    public RemoveBgMultipart withScale(String scale) {
        this.scale = scale;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=semitransparency")
    public Boolean semitransparency;
    public RemoveBgMultipart withSemitransparency(Boolean semitransparency) {
        this.semitransparency = semitransparency;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=size")
    public RemoveBgMultipartSizeEnum size;
    public RemoveBgMultipart withSize(RemoveBgMultipartSizeEnum size) {
        this.size = size;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type")
    public RemoveBgMultipartTypeEnum type;
    public RemoveBgMultipart withType(RemoveBgMultipartTypeEnum type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=type_level")
    public RemoveBgMultipartTypeLevelEnum typeLevel;
    public RemoveBgMultipart withTypeLevel(RemoveBgMultipartTypeLevelEnum typeLevel) {
        this.typeLevel = typeLevel;
        return this;
    }
}