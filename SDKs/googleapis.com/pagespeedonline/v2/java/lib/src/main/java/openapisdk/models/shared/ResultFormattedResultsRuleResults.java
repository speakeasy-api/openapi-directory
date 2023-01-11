package openapisdk.models.shared;



/**
 * ResultFormattedResultsRuleResults
 * The enum-like identifier for this rule. For instance "EnableKeepAlive" or "AvoidCssImport". Not localized.
**/
public class ResultFormattedResultsRuleResults {
    public String[] groups;
    public ResultFormattedResultsRuleResults withGroups(String[] groups) {
        this.groups = groups;
        return this;
    }
    public String localizedRuleName;
    public ResultFormattedResultsRuleResults withLocalizedRuleName(String localizedRuleName) {
        this.localizedRuleName = localizedRuleName;
        return this;
    }
    public Double ruleImpact;
    public ResultFormattedResultsRuleResults withRuleImpact(Double ruleImpact) {
        this.ruleImpact = ruleImpact;
        return this;
    }
    public PagespeedApiFormatStringV2 summary;
    public ResultFormattedResultsRuleResults withSummary(PagespeedApiFormatStringV2 summary) {
        this.summary = summary;
        return this;
    }
    public ResultFormattedResultsRuleResultsUrlBlocks[] urlBlocks;
    public ResultFormattedResultsRuleResults withUrlBlocks(ResultFormattedResultsRuleResultsUrlBlocks[] urlBlocks) {
        this.urlBlocks = urlBlocks;
        return this;
    }
}