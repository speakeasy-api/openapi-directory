package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

public class RemoveBgJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("add_shadow")
@SpeakeasyMetadata("form:name=add_shadow")
    public Boolean addShadow;
    public RemoveBgJson withAddShadow(Boolean addShadow) {
        this.addShadow = addShadow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bg_color")
@SpeakeasyMetadata("form:name=bg_color")
    public String bgColor;
    public RemoveBgJson withBgColor(String bgColor) {
        this.bgColor = bgColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bg_image_url")
@SpeakeasyMetadata("form:name=bg_image_url")
    public String bgImageUrl;
    public RemoveBgJson withBgImageUrl(String bgImageUrl) {
        this.bgImageUrl = bgImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channels")
@SpeakeasyMetadata("form:name=channels")
    public RemoveBgJsonChannelsEnum channels;
    public RemoveBgJson withChannels(RemoveBgJsonChannelsEnum channels) {
        this.channels = channels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crop")
@SpeakeasyMetadata("form:name=crop")
    public Boolean crop;
    public RemoveBgJson withCrop(Boolean crop) {
        this.crop = crop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crop_margin")
@SpeakeasyMetadata("form:name=crop_margin")
    public String cropMargin;
    public RemoveBgJson withCropMargin(String cropMargin) {
        this.cropMargin = cropMargin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("format")
@SpeakeasyMetadata("form:name=format")
    public RemoveBgJsonFormatEnum format;
    public RemoveBgJson withFormat(RemoveBgJsonFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_file_b64")
@SpeakeasyMetadata("form:name=image_file_b64")
    public String imageFileB64;
    public RemoveBgJson withImageFileB64(String imageFileB64) {
        this.imageFileB64 = imageFileB64;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image_url")
@SpeakeasyMetadata("form:name=image_url")
    public String imageUrl;
    public RemoveBgJson withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
@SpeakeasyMetadata("form:name=position")
    public String position;
    public RemoveBgJson withPosition(String position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roi")
@SpeakeasyMetadata("form:name=roi")
    public String roi;
    public RemoveBgJson withRoi(String roi) {
        this.roi = roi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scale")
@SpeakeasyMetadata("form:name=scale")
    public String scale;
    public RemoveBgJson withScale(String scale) {
        this.scale = scale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("semitransparency")
@SpeakeasyMetadata("form:name=semitransparency")
    public Boolean semitransparency;
    public RemoveBgJson withSemitransparency(Boolean semitransparency) {
        this.semitransparency = semitransparency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
@SpeakeasyMetadata("form:name=size")
    public RemoveBgJsonSizeEnum size;
    public RemoveBgJson withSize(RemoveBgJsonSizeEnum size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
@SpeakeasyMetadata("form:name=type")
    public RemoveBgJsonTypeEnum type;
    public RemoveBgJson withType(RemoveBgJsonTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type_level")
@SpeakeasyMetadata("form:name=type_level")
    public RemoveBgJsonTypeLevelEnum typeLevel;
    public RemoveBgJson withTypeLevel(RemoveBgJsonTypeLevelEnum typeLevel) {
        this.typeLevel = typeLevel;
        return this;
    }
}