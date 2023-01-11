package openapisdk.models.shared;



/**
 * ResultFormattedResultsRuleResultsUrlBlocksHeader
 * Heading to be displayed with the list of URLs.
**/
public class ResultFormattedResultsRuleResultsUrlBlocksHeader {
    public ResultFormattedResultsRuleResultsUrlBlocksHeaderArgs[] args;
    public ResultFormattedResultsRuleResultsUrlBlocksHeader withArgs(ResultFormattedResultsRuleResultsUrlBlocksHeaderArgs[] args) {
        this.args = args;
        return this;
    }
    public String format;
    public ResultFormattedResultsRuleResultsUrlBlocksHeader withFormat(String format) {
        this.format = format;
        return this;
    }
}