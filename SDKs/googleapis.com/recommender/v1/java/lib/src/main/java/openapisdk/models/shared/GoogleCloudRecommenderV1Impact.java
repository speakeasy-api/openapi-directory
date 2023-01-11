package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1Impact
 * Contains the impact a recommendation can have for a given category.
**/
public class GoogleCloudRecommenderV1Impact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public GoogleCloudRecommenderV1ImpactCategoryEnum category;
    public GoogleCloudRecommenderV1Impact withCategory(GoogleCloudRecommenderV1ImpactCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costProjection")
    public GoogleCloudRecommenderV1CostProjection costProjection;
    public GoogleCloudRecommenderV1Impact withCostProjection(GoogleCloudRecommenderV1CostProjection costProjection) {
        this.costProjection = costProjection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reliabilityProjection")
    public GoogleCloudRecommenderV1ReliabilityProjection reliabilityProjection;
    public GoogleCloudRecommenderV1Impact withReliabilityProjection(GoogleCloudRecommenderV1ReliabilityProjection reliabilityProjection) {
        this.reliabilityProjection = reliabilityProjection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityProjection")
    public GoogleCloudRecommenderV1SecurityProjection securityProjection;
    public GoogleCloudRecommenderV1Impact withSecurityProjection(GoogleCloudRecommenderV1SecurityProjection securityProjection) {
        this.securityProjection = securityProjection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sustainabilityProjection")
    public GoogleCloudRecommenderV1SustainabilityProjection sustainabilityProjection;
    public GoogleCloudRecommenderV1Impact withSustainabilityProjection(GoogleCloudRecommenderV1SustainabilityProjection sustainabilityProjection) {
        this.sustainabilityProjection = sustainabilityProjection;
        return this;
    }
}