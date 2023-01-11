package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GradeCategory
 * Details for a grade category in a course. Coursework may have zero or one grade category, and the category may be used in computing the overall grade. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.
**/
public class GradeCategory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultGradeDenominator")
    public Integer defaultGradeDenominator;
    public GradeCategory withDefaultGradeDenominator(Integer defaultGradeDenominator) {
        this.defaultGradeDenominator = defaultGradeDenominator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GradeCategory withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GradeCategory withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Integer weight;
    public GradeCategory withWeight(Integer weight) {
        this.weight = weight;
        return this;
    }
}