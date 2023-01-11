package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenerateNetworkReportResponse
 * The streaming response for the AdMob Network report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "dateRange": { "startDate": {"year": 2018, "month": 9, "day": 1}, "endDate": {"year": 2018, "month": 9, "day": 1} }, "localizationSettings": { "currencyCode": "USD", "languageCode": "en-US" } } }, { "row": { "dimensionValues": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", displayLabel: "My app name!" } }, "metricValues": { "ESTIMATED_EARNINGS": {"microsValue": 6500000} } } }, { "footer": {"matchingRowCount": 1} }]
**/
public class GenerateNetworkReportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("footer")
    public ReportFooter footer;
    public GenerateNetworkReportResponse withFooter(ReportFooter footer) {
        this.footer = footer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("header")
    public ReportHeader header;
    public GenerateNetworkReportResponse withHeader(ReportHeader header) {
        this.header = header;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("row")
    public ReportRow row;
    public GenerateNetworkReportResponse withRow(ReportRow row) {
        this.row = row;
        return this;
    }
}