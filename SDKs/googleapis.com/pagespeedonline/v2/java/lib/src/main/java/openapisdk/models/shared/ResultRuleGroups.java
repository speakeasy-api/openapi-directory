package openapisdk.models.shared;



/**
 * ResultRuleGroups
 * The name of this rule group: one of "SPEED" or "USABILITY".
**/
public class ResultRuleGroups {
    public Integer score;
    public ResultRuleGroups withScore(Integer score) {
        this.score = score;
        return this;
    }
}