package openapisdk.models.shared;



/**
 * PagespeedApiPagespeedResponseV4FormattedResults
 * Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.
**/
public class PagespeedApiPagespeedResponseV4FormattedResults {
    public String locale;
    public PagespeedApiPagespeedResponseV4FormattedResults withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    public java.util.Map<String, PagespeedApiPagespeedResponseV4FormattedResultsRuleResults> ruleResults;
    public PagespeedApiPagespeedResponseV4FormattedResults withRuleResults(java.util.Map<String, PagespeedApiPagespeedResponseV4FormattedResultsRuleResults> ruleResults) {
        this.ruleResults = ruleResults;
        return this;
    }
}