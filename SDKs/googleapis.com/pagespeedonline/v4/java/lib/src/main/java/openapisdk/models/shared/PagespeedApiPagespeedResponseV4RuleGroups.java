package openapisdk.models.shared;



/**
 * PagespeedApiPagespeedResponseV4RuleGroups
 * The name of this rule group: one of "SPEED", "USABILITY", or "SECURITY".
**/
public class PagespeedApiPagespeedResponseV4RuleGroups {
    public Boolean pass;
    public PagespeedApiPagespeedResponseV4RuleGroups withPass(Boolean pass) {
        this.pass = pass;
        return this;
    }
    public Integer score;
    public PagespeedApiPagespeedResponseV4RuleGroups withScore(Integer score) {
        this.score = score;
        return this;
    }
}