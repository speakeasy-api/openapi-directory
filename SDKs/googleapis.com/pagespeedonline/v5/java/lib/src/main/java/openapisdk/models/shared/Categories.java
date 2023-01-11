package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Categories
 * The categories in a Lighthouse run.
**/
public class Categories {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessibility")
    public LighthouseCategoryV5 accessibility;
    public Categories withAccessibility(LighthouseCategoryV5 accessibility) {
        this.accessibility = accessibility;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("best-practices")
    public LighthouseCategoryV5 bestPractices;
    public Categories withBestPractices(LighthouseCategoryV5 bestPractices) {
        this.bestPractices = bestPractices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performance")
    public LighthouseCategoryV5 performance;
    public Categories withPerformance(LighthouseCategoryV5 performance) {
        this.performance = performance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pwa")
    public LighthouseCategoryV5 pwa;
    public Categories withPwa(LighthouseCategoryV5 pwa) {
        this.pwa = pwa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seo")
    public LighthouseCategoryV5 seo;
    public Categories withSeo(LighthouseCategoryV5 seo) {
        this.seo = seo;
        return this;
    }
}