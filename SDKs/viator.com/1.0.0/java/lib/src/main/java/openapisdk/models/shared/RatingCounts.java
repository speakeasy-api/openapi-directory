package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RatingCounts
 * **dictionary** of rating (stars) to number of reviews with each rating for *this* product"
 * 
 * users rate products by assigning a star-rating from 1-5; these values show the total number of reviews for each of the star ratings (up to a maximum given in the `reviewCount` field in this response)
 * 
 * - **note**: see response sample for structure
 * 
**/
public class RatingCounts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("1")
    public Double one;
    public RatingCounts withOne(Double one) {
        this.one = one;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("2")
    public Double two;
    public RatingCounts withTwo(Double two) {
        this.two = two;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("3")
    public Double three;
    public RatingCounts withThree(Double three) {
        this.three = three;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("4")
    public Double four;
    public RatingCounts withFour(Double four) {
        this.four = four;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("5")
    public Double five;
    public RatingCounts withFive(Double five) {
        this.five = five;
        return this;
    }
}