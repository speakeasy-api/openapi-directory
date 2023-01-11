package openapisdk.models.shared;



/**
 * ResultFormattedResultsRuleResultsUrlBlocksUrlsResult
 * A format string that gives information about the URL, and a list of arguments for that format string.
**/
public class ResultFormattedResultsRuleResultsUrlBlocksUrlsResult {
    public ResultFormattedResultsRuleResultsUrlBlocksUrlsResultArgs[] args;
    public ResultFormattedResultsRuleResultsUrlBlocksUrlsResult withArgs(ResultFormattedResultsRuleResultsUrlBlocksUrlsResultArgs[] args) {
        this.args = args;
        return this;
    }
    public String format;
    public ResultFormattedResultsRuleResultsUrlBlocksUrlsResult withFormat(String format) {
        this.format = format;
        return this;
    }
}