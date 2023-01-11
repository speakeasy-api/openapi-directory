package openapisdk.models.shared;



/**
 * ResultFormattedResults
 * Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
**/
public class ResultFormattedResults {
    public String locale;
    public ResultFormattedResults withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    public java.util.Map<String, ResultFormattedResultsRuleResults> ruleResults;
    public ResultFormattedResults withRuleResults(java.util.Map<String, ResultFormattedResultsRuleResults> ruleResults) {
        this.ruleResults = ruleResults;
        return this;
    }
}