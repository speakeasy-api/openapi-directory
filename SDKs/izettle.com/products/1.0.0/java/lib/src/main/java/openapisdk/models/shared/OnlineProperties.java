package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnlineProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OnlineProperties withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("presentation")
    public Presentation presentation;
    public OnlineProperties withPresentation(Presentation presentation) {
        this.presentation = presentation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seo")
    public SearchEngineOptimization seo;
    public OnlineProperties withSeo(SearchEngineOptimization seo) {
        this.seo = seo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shipping")
    public Shipping shipping;
    public OnlineProperties withShipping(Shipping shipping) {
        this.shipping = shipping;
        return this;
    }
    @JsonProperty("status")
    public OnlinePropertiesStatusEnum status;
    public OnlineProperties withStatus(OnlinePropertiesStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public OnlineProperties withTitle(String title) {
        this.title = title;
        return this;
    }
}