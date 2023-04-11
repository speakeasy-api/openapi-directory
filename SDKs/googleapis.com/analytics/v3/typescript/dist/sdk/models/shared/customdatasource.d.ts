import { SpeakeasyBase } from "../../../internal/utils";
export declare class CustomDataSourceChildLink extends SpeakeasyBase {
    /**
     * Link to the list of daily uploads for this custom data source. Link to the list of uploads for this custom data source.
     */
    href?: string;
    /**
     * Value is "analytics#dailyUploads". Value is "analytics#uploads".
     */
    type?: string;
}
/**
 * Parent link for this custom data source. Points to the web property to which this custom data source belongs.
 */
export declare class CustomDataSourceParentLink extends SpeakeasyBase {
    /**
     * Link to the web property to which this custom data source belongs.
     */
    href?: string;
    /**
     * Value is "analytics#webproperty".
     */
    type?: string;
}
/**
 * JSON template for an Analytics custom data source.
 */
export declare class CustomDataSource extends SpeakeasyBase {
    /**
     * Account ID to which this custom data source belongs.
     */
    accountId?: string;
    childLink?: CustomDataSourceChildLink;
    /**
     * Time this custom data source was created.
     */
    created?: Date;
    /**
     * Description of custom data source.
     */
    description?: string;
    /**
     * Custom data source ID.
     */
    id?: string;
    importBehavior?: string;
    /**
     * Resource type for Analytics custom data source.
     */
    kind?: string;
    /**
     * Name of this custom data source.
     */
    name?: string;
    /**
     * Parent link for this custom data source. Points to the web property to which this custom data source belongs.
     */
    parentLink?: CustomDataSourceParentLink;
    /**
     * IDs of views (profiles) linked to the custom data source.
     */
    profilesLinked?: string[];
    /**
     * Collection of schema headers of the custom data source.
     */
    schema?: string[];
    /**
     * Link for this Analytics custom data source.
     */
    selfLink?: string;
    /**
     * Type of the custom data source.
     */
    type?: string;
    /**
     * Time this custom data source was last modified.
     */
    updated?: Date;
    /**
     * Upload type of the custom data source.
     */
    uploadType?: string;
    /**
     * Web property ID of the form UA-XXXXX-YY to which this custom data source belongs.
     */
    webPropertyId?: string;
}
