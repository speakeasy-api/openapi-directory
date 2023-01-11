package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CriticMultimediaResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credit")
    public String credit;
    public CriticMultimediaResource withCredit(String credit) {
        this.credit = credit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public Long height;
    public CriticMultimediaResource withHeight(Long height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("src")
    public String src;
    public CriticMultimediaResource withSrc(String src) {
        this.src = src;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public CriticMultimediaResource withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public Long width;
    public CriticMultimediaResource withWidth(Long width) {
        this.width = width;
        return this;
    }
}