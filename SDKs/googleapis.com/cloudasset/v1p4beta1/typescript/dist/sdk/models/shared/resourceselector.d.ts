import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the resource to analyze for access policies, which may be set directly on the resource, or on ancestors such as organizations, folders or projects.
 */
export declare class ResourceSelector extends SpeakeasyBase {
    /**
     * Required. The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of a resource of [supported resource types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#analyzable_asset_types).
     */
    fullResourceName?: string;
}
