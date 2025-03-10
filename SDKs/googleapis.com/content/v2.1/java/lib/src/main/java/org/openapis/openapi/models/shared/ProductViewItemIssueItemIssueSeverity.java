/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProductViewItemIssueItemIssueSeverity - Severity of an issue per destination in a region, and aggregated severity.
 */
public class ProductViewItemIssueItemIssueSeverity {
    /**
     * Severity of an issue aggregated for destination.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregatedSeverity")
    public ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum aggregatedSeverity;

    public ProductViewItemIssueItemIssueSeverity withAggregatedSeverity(ProductViewItemIssueItemIssueSeverityAggregatedSeverityEnum aggregatedSeverity) {
        this.aggregatedSeverity = aggregatedSeverity;
        return this;
    }
    
    /**
     * Item issue severity for every destination.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severityPerDestination")
    public ProductViewItemIssueIssueSeverityPerDestination[] severityPerDestination;

    public ProductViewItemIssueItemIssueSeverity withSeverityPerDestination(ProductViewItemIssueIssueSeverityPerDestination[] severityPerDestination) {
        this.severityPerDestination = severityPerDestination;
        return this;
    }
    
    public ProductViewItemIssueItemIssueSeverity(){}
}
