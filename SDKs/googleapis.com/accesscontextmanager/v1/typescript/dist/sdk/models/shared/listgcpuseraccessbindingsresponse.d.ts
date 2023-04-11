import { SpeakeasyBase } from "../../../internal/utils";
import { GcpUserAccessBinding } from "./gcpuseraccessbinding";
/**
 * Response of ListGcpUserAccessBindings.
 */
export declare class ListGcpUserAccessBindingsResponse extends SpeakeasyBase {
    /**
     * GcpUserAccessBinding
     */
    gcpUserAccessBindings?: GcpUserAccessBinding[];
    /**
     * Token to get the next page of items. If blank, there are no more items.
     */
    nextPageToken?: string;
}
