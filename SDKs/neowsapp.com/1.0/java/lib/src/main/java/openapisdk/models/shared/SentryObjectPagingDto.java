package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SentryObjectPagingDto {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public java.util.Map<String, Object> links;
    public SentryObjectPagingDto withLinks(java.util.Map<String, Object> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("page")
    public PageMetaData page;
    public SentryObjectPagingDto withPage(PageMetaData page) {
        this.page = page;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sentry_objects")
    public SentryImpactRiskObject[] sentryObjects;
    public SentryObjectPagingDto withSentryObjects(SentryImpactRiskObject[] sentryObjects) {
        this.sentryObjects = sentryObjects;
        return this;
    }
}