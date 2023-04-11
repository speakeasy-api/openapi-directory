import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SystemTimestamps, GoogleCloudDatacatalogV1SystemTimestampsInput } from "./googleclouddatacatalogv1systemtimestamps";
/**
 * Entry group metadata. An `EntryGroup` resource represents a logical grouping of zero or more Data Catalog Entry resources.
 */
export declare class GoogleCloudDatacatalogV1EntryGroup extends SpeakeasyBase {
    /**
     * Timestamps associated with this resource in a particular system.
     */
    dataCatalogTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;
    /**
     * Entry group description. Can consist of several sentences or paragraphs that describe the entry group contents. Default value is an empty string.
     */
    description?: string;
    /**
     * A short name to identify the entry group, for example, "analytics data - jan 2011". Default value is an empty string.
     */
    displayName?: string;
    /**
     * The resource name of the entry group in URL format. Note: The entry group itself and its child resources might not be stored in the location specified in its name.
     */
    name?: string;
}
/**
 * Entry group metadata. An `EntryGroup` resource represents a logical grouping of zero or more Data Catalog Entry resources.
 */
export declare class GoogleCloudDatacatalogV1EntryGroupInput extends SpeakeasyBase {
    /**
     * Timestamps associated with this resource in a particular system.
     */
    dataCatalogTimestamps?: GoogleCloudDatacatalogV1SystemTimestampsInput;
    /**
     * Entry group description. Can consist of several sentences or paragraphs that describe the entry group contents. Default value is an empty string.
     */
    description?: string;
    /**
     * A short name to identify the entry group, for example, "analytics data - jan 2011". Default value is an empty string.
     */
    displayName?: string;
    /**
     * The resource name of the entry group in URL format. Note: The entry group itself and its child resources might not be stored in the location specified in its name.
     */
    name?: string;
}
