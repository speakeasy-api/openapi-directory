package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PagespeedApiPagespeedResponseV5
 * The Pagespeed API response object.
**/
public class PagespeedApiPagespeedResponseV5 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analysisUTCTimestamp")
    public String analysisUTCTimestamp;
    public PagespeedApiPagespeedResponseV5 withAnalysisUtcTimestamp(String analysisUTCTimestamp) {
        this.analysisUTCTimestamp = analysisUTCTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("captchaResult")
    public String captchaResult;
    public PagespeedApiPagespeedResponseV5 withCaptchaResult(String captchaResult) {
        this.captchaResult = captchaResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PagespeedApiPagespeedResponseV5 withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public PagespeedApiPagespeedResponseV5 withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lighthouseResult")
    public LighthouseResultV5 lighthouseResult;
    public PagespeedApiPagespeedResponseV5 withLighthouseResult(LighthouseResultV5 lighthouseResult) {
        this.lighthouseResult = lighthouseResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loadingExperience")
    public PagespeedApiLoadingExperienceV5 loadingExperience;
    public PagespeedApiPagespeedResponseV5 withLoadingExperience(PagespeedApiLoadingExperienceV5 loadingExperience) {
        this.loadingExperience = loadingExperience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originLoadingExperience")
    public PagespeedApiLoadingExperienceV5 originLoadingExperience;
    public PagespeedApiPagespeedResponseV5 withOriginLoadingExperience(PagespeedApiLoadingExperienceV5 originLoadingExperience) {
        this.originLoadingExperience = originLoadingExperience;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public PagespeedVersion version;
    public PagespeedApiPagespeedResponseV5 withVersion(PagespeedVersion version) {
        this.version = version;
        return this;
    }
}