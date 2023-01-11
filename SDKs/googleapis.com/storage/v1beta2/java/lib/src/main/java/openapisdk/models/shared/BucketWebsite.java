package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketWebsite
 * The bucket's website configuration.
**/
public class BucketWebsite {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainPageSuffix")
    public String mainPageSuffix;
    public BucketWebsite withMainPageSuffix(String mainPageSuffix) {
        this.mainPageSuffix = mainPageSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notFoundPage")
    public String notFoundPage;
    public BucketWebsite withNotFoundPage(String notFoundPage) {
        this.notFoundPage = notFoundPage;
        return this;
    }
}