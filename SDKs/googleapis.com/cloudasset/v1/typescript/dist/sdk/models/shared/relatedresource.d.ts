import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The detailed related resource.
 */
export declare class RelatedResource extends SpeakeasyBase {
    /**
     * The type of the asset. Example: `compute.googleapis.com/Instance`
     */
    assetType?: string;
    /**
     * The full resource name of the related resource. Example: `//compute.googleapis.com/projects/my_proj_123/zones/instance/instance123`
     */
    fullResourceName?: string;
}
