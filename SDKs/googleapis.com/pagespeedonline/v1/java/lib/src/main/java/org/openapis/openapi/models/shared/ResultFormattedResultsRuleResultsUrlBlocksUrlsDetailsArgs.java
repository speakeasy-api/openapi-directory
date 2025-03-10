/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;



public class ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgs {
    /**
     * Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, or DURATION.
     */
    
    public String type;

    public ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgs withType(String type) {
        this.type = type;
        return this;
    }
    
    /**
     * Argument value, as a localized string.
     */
    
    public String value;

    public ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgs withValue(String value) {
        this.value = value;
        return this;
    }
    
    public ResultFormattedResultsRuleResultsUrlBlocksUrlsDetailsArgs(){}
}
