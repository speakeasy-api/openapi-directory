/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum - The method to aggregate the subset portfolios
 */
public enum PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum {
    AVERAGE("average"),
    MEDIAN("median");

    @JsonValue
    public final String value;

    private PostPortfolioOptimizationMaximumReturnSubsetResamplingBasedRequestBodySubsetPortfoliosAggregationMethodEnum(String value) {
        this.value = value;
    }
}
