import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A link between a GA4 Property and BigQuery project.
 */
export declare class GoogleAnalyticsAdminV1alphaBigQueryLink extends SpeakeasyBase {
    /**
     * Output only. Time when the link was created.
     */
    createTime?: string;
    /**
     * If set true, enables daily data export to the linked Google Cloud project.
     */
    dailyExportEnabled?: boolean;
    /**
     * The list of event names that will be excluded from exports.
     */
    excludedEvents?: string[];
    /**
     * The list of streams under the parent property for which data will be exported. Format: properties/{property_id}/dataStreams/{stream_id} Example: ['properties/1000/dataStreams/2000']
     */
    exportStreams?: string[];
    /**
     * If set true, exported data will include advertising identifiers for mobile app streams.
     */
    includeAdvertisingId?: boolean;
    /**
     * If set true, enables intraday export to the linked Google Cloud project.
     */
    intradayExportEnabled?: boolean;
    /**
     * Output only. Resource name of this BigQuery link. Format: 'properties/{property_id}/bigQueryLinks/{bigquery_link_id}' Format: 'properties/1234/bigQueryLinks/abc567'
     */
    name?: string;
    /**
     * Immutable. The linked Google Cloud project. When creating a BigQueryLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, the returned project will always have a project that contains a project number. Format: 'projects/{project number}' Example: 'projects/1234'
     */
    project?: string;
    /**
     * If set true, enables streaming export to the linked Google Cloud project.
     */
    streamingExportEnabled?: boolean;
}
