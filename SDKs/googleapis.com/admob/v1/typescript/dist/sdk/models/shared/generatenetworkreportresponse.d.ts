import { SpeakeasyBase } from "../../../internal/utils";
import { ReportFooter } from "./reportfooter";
import { ReportHeader } from "./reportheader";
import { ReportRow } from "./reportrow";
/**
 * The streaming response for the AdMob Network report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "dateRange": { "startDate": {"year": 2018, "month": 9, "day": 1}, "endDate": {"year": 2018, "month": 9, "day": 1} }, "localizationSettings": { "currencyCode": "USD", "languageCode": "en-US" } } }, { "row": { "dimensionValues": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", displayLabel: "My app name!" } }, "metricValues": { "ESTIMATED_EARNINGS": {"microsValue": 6500000} } } }, { "footer": {"matchingRowCount": 1} }]
 */
export declare class GenerateNetworkReportResponse extends SpeakeasyBase {
    /**
     * Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response.
     */
    footer?: ReportFooter;
    /**
     * Groups data helps to treat the generated report. Always sent as a first message in the stream response.
     */
    header?: ReportHeader;
    /**
     * A row of the returning report.
     */
    row?: ReportRow;
}
