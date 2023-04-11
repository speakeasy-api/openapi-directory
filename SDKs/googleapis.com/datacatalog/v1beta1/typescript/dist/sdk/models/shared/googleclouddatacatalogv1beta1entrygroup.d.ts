import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps, GoogleCloudDatacatalogV1beta1SystemTimestampsInput } from "./googleclouddatacatalogv1beta1systemtimestamps";
/**
 * EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.
 */
export declare class GoogleCloudDatacatalogV1beta1EntryGroup extends SpeakeasyBase {
    /**
     * Timestamps about this resource according to a particular system.
     */
    dataCatalogTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;
    /**
     * Entry group description, which can consist of several sentences or paragraphs that describe entry group contents. Default value is an empty string.
     */
    description?: string;
    /**
     * A short name to identify the entry group, for example, "analytics data - jan 2011". Default value is an empty string.
     */
    displayName?: string;
    /**
     * The resource name of the entry group in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this EntryGroup and its child resources may not actually be stored in the location in this name.
     */
    name?: string;
}
/**
 * EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.
 */
export declare class GoogleCloudDatacatalogV1beta1EntryGroupInput extends SpeakeasyBase {
    /**
     * Timestamps about this resource according to a particular system.
     */
    dataCatalogTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestampsInput;
    /**
     * Entry group description, which can consist of several sentences or paragraphs that describe entry group contents. Default value is an empty string.
     */
    description?: string;
    /**
     * A short name to identify the entry group, for example, "analytics data - jan 2011". Default value is an empty string.
     */
    displayName?: string;
    /**
     * The resource name of the entry group in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this EntryGroup and its child resources may not actually be stored in the location in this name.
     */
    name?: string;
}
