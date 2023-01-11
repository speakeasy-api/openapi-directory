package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1beta1Impact
 * Contains the impact a recommendation can have for a given category.
**/
public class GoogleCloudRecommenderV1beta1Impact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public GoogleCloudRecommenderV1beta1ImpactCategoryEnum category;
    public GoogleCloudRecommenderV1beta1Impact withCategory(GoogleCloudRecommenderV1beta1ImpactCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("costProjection")
    public GoogleCloudRecommenderV1beta1CostProjection costProjection;
    public GoogleCloudRecommenderV1beta1Impact withCostProjection(GoogleCloudRecommenderV1beta1CostProjection costProjection) {
        this.costProjection = costProjection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reliabilityProjection")
    public GoogleCloudRecommenderV1beta1ReliabilityProjection reliabilityProjection;
    public GoogleCloudRecommenderV1beta1Impact withReliabilityProjection(GoogleCloudRecommenderV1beta1ReliabilityProjection reliabilityProjection) {
        this.reliabilityProjection = reliabilityProjection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityProjection")
    public GoogleCloudRecommenderV1beta1SecurityProjection securityProjection;
    public GoogleCloudRecommenderV1beta1Impact withSecurityProjection(GoogleCloudRecommenderV1beta1SecurityProjection securityProjection) {
        this.securityProjection = securityProjection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sustainabilityProjection")
    public GoogleCloudRecommenderV1beta1SustainabilityProjection sustainabilityProjection;
    public GoogleCloudRecommenderV1beta1Impact withSustainabilityProjection(GoogleCloudRecommenderV1beta1SustainabilityProjection sustainabilityProjection) {
        this.sustainabilityProjection = sustainabilityProjection;
        return this;
    }
}