import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoredResourceDescriptor } from "./monitoredresourcedescriptor";
/**
 * The ListMonitoredResourceDescriptors response.
 */
export declare class ListMonitoredResourceDescriptorsResponse extends SpeakeasyBase {
    /**
     * If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as page_token in the next call to this method.
     */
    nextPageToken?: string;
    /**
     * The monitored resource descriptors that are available to this project and that match filter, if present.
     */
    resourceDescriptors?: MonitoredResourceDescriptor[];
}
