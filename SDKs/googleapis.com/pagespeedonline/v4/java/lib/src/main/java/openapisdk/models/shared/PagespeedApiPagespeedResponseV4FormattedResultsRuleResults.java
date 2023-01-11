package openapisdk.models.shared;



/**
 * PagespeedApiPagespeedResponseV4FormattedResultsRuleResults
 * The enum-like identifier for this rule. For instance "EnableKeepAlive" or "AvoidCssImport". Not localized.
**/
public class PagespeedApiPagespeedResponseV4FormattedResultsRuleResults {
    public Boolean beta;
    public PagespeedApiPagespeedResponseV4FormattedResultsRuleResults withBeta(Boolean beta) {
        this.beta = beta;
        return this;
    }
    public String[] groups;
    public PagespeedApiPagespeedResponseV4FormattedResultsRuleResults withGroups(String[] groups) {
        this.groups = groups;
        return this;
    }
    public String localizedRuleName;
    public PagespeedApiPagespeedResponseV4FormattedResultsRuleResults withLocalizedRuleName(String localizedRuleName) {
        this.localizedRuleName = localizedRuleName;
        return this;
    }
    public Double ruleImpact;
    public PagespeedApiPagespeedResponseV4FormattedResultsRuleResults withRuleImpact(Double ruleImpact) {
        this.ruleImpact = ruleImpact;
        return this;
    }
    public PagespeedApiFormatStringV4 summary;
    public PagespeedApiPagespeedResponseV4FormattedResultsRuleResults withSummary(PagespeedApiFormatStringV4 summary) {
        this.summary = summary;
        return this;
    }
    public PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks[] urlBlocks;
    public PagespeedApiPagespeedResponseV4FormattedResultsRuleResults withUrlBlocks(PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsUrlBlocks[] urlBlocks) {
        this.urlBlocks = urlBlocks;
        return this;
    }
}