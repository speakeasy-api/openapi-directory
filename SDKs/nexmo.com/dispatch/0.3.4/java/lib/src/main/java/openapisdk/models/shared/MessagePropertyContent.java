package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MessagePropertyContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("audio")
    public AudioProperty audio;
    public MessagePropertyContent withAudio(AudioProperty audio) {
        this.audio = audio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public FileProperty file;
    public MessagePropertyContent withFile(FileProperty file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public ImageProperty image;
    public MessagePropertyContent withImage(ImageProperty image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public TemplateProperty template;
    public MessagePropertyContent withTemplate(TemplateProperty template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public MessagePropertyContent withText(String text) {
        this.text = text;
        return this;
    }
    @JsonProperty("type")
    public MessagePropertyContentTypeEnum type;
    public MessagePropertyContent withType(MessagePropertyContentTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("video")
    public VideoProperty video;
    public MessagePropertyContent withVideo(VideoProperty video) {
        this.video = video;
        return this;
    }
}