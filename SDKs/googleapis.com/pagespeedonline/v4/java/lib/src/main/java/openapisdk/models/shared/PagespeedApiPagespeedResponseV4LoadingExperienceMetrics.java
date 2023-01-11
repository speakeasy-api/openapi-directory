package openapisdk.models.shared;



/**
 * PagespeedApiPagespeedResponseV4LoadingExperienceMetrics
 * The type of the metric.
**/
public class PagespeedApiPagespeedResponseV4LoadingExperienceMetrics {
    public String category;
    public PagespeedApiPagespeedResponseV4LoadingExperienceMetrics withCategory(String category) {
        this.category = category;
        return this;
    }
    public PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions[] distributions;
    public PagespeedApiPagespeedResponseV4LoadingExperienceMetrics withDistributions(PagespeedApiPagespeedResponseV4LoadingExperienceMetricsDistributions[] distributions) {
        this.distributions = distributions;
        return this;
    }
    public Integer median;
    public PagespeedApiPagespeedResponseV4LoadingExperienceMetrics withMedian(Integer median) {
        this.median = median;
        return this;
    }
}