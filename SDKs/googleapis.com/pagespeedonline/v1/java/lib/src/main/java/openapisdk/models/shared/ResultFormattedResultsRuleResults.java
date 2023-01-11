package openapisdk.models.shared;



/**
 * ResultFormattedResultsRuleResults
 * The enum-like identifier for this rule. For instance "EnableKeepAlive" or "AvoidCssImport". Not localized.
**/
public class ResultFormattedResultsRuleResults {
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
    public ResultFormattedResultsRuleResultsUrlBlocks[] urlBlocks;
    public ResultFormattedResultsRuleResults withUrlBlocks(ResultFormattedResultsRuleResultsUrlBlocks[] urlBlocks) {
        this.urlBlocks = urlBlocks;
        return this;
    }
}