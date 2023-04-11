import { SpeakeasyBase } from "../../../internal/utils";
import { ProductPermission } from "./productpermission";
/**
 * Information about the permissions required by a specific app and whether they have been accepted by the enterprise.
 */
export declare class ProductPermissions extends SpeakeasyBase {
    /**
     * The permissions required by the app.
     */
    permission?: ProductPermission[];
    /**
     * The ID of the app that the permissions relate to, e.g. "app:com.google.android.gm".
     */
    productId?: string;
}
