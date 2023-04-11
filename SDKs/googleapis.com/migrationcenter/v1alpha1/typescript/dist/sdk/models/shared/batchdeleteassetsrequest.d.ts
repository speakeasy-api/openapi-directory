import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to delete a list of asset.
 */
export declare class BatchDeleteAssetsRequest extends SpeakeasyBase {
    /**
     * Optional. When this value is set to `true` the request is a no-op for non-existing assets. See https://google.aip.dev/135#delete-if-existing for additional details. Default value is `false`.
     */
    allowMissing?: boolean;
    /**
     * Required. The IDs of the assets to delete. A maximum of 10 assets can be deleted in a batch. format: projects/{project}/locations/{location}/asset/{name}.
     */
    names?: string[];
}
