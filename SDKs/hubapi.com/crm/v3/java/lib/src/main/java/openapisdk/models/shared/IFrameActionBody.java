package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class IFrameActionBody {
    @JsonProperty("height")
    public Integer height;
    public IFrameActionBody withHeight(Integer height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public IFrameActionBody withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("propertyNamesIncluded")
    public String[] propertyNamesIncluded;
    public IFrameActionBody withPropertyNamesIncluded(String[] propertyNamesIncluded) {
        this.propertyNamesIncluded = propertyNamesIncluded;
        return this;
    }
    @JsonProperty("type")
    public IFrameActionBodyTypeEnum type;
    public IFrameActionBody withType(IFrameActionBodyTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public IFrameActionBody withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("width")
    public Integer width;
    public IFrameActionBody withWidth(Integer width) {
        this.width = width;
        return this;
    }
}