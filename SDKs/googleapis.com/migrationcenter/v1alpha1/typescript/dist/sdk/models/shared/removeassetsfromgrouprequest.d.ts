import { SpeakeasyBase } from "../../../internal/utils";
import { AssetList } from "./assetlist";
/**
 * A request to remove assets from a group.
 */
export declare class RemoveAssetsFromGroupRequest extends SpeakeasyBase {
    /**
     * Optional. When this value is set to `false` and one of the given assets is not an existing member of the group, the operation fails with a `Not Found` error. When set to `true` this situation is silently ignored by the server. Default value is `false`.
     */
    allowMissing?: boolean;
    /**
     * Lists the asset IDs of all assets.
     */
    assets?: AssetList;
    /**
     * Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     */
    requestId?: string;
}
