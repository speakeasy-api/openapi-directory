import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Singleton resource under a WebDataStream, configuring measurement of additional site interactions and content.
 */
export declare class GoogleAnalyticsAdminV1alphaEnhancedMeasurementSettings extends SpeakeasyBase {
    /**
     * If enabled, capture a file download event each time a link is clicked with a common document, compressed file, application, video, or audio extension.
     */
    fileDownloadsEnabled?: boolean;
    /**
     * If enabled, capture a form interaction event each time a visitor interacts with a form on your website. False by default.
     */
    formInteractionsEnabled?: boolean;
    /**
     * Output only. Resource name of the Enhanced Measurement Settings. Format: properties/{property_id}/dataStreams/{data_stream}/enhancedMeasurementSettings Example: "properties/1000/dataStreams/2000/enhancedMeasurementSettings"
     */
    name?: string;
    /**
     * If enabled, capture an outbound click event each time a visitor clicks a link that leads them away from your domain.
     */
    outboundClicksEnabled?: boolean;
    /**
     * If enabled, capture a page view event each time the website changes the browser history state.
     */
    pageChangesEnabled?: boolean;
    /**
     * If enabled, capture scroll events each time a visitor gets to the bottom of a page.
     */
    scrollsEnabled?: boolean;
    /**
     * Required. URL query parameters to interpret as site search parameters. Max length is 1024 characters. Must not be empty.
     */
    searchQueryParameter?: string;
    /**
     * If enabled, capture a view search results event each time a visitor performs a search on your site (based on a query parameter).
     */
    siteSearchEnabled?: boolean;
    /**
     * Indicates whether Enhanced Measurement Settings will be used to automatically measure interactions and content on this web stream. Changing this value does not affect the settings themselves, but determines whether they are respected.
     */
    streamEnabled?: boolean;
    /**
     * Additional URL query parameters. Max length is 1024 characters.
     */
    uriQueryParameter?: string;
    /**
     * If enabled, capture video play, progress, and complete events as visitors view embedded videos on your site.
     */
    videoEngagementEnabled?: boolean;
}
