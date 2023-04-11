import { SpeakeasyBase } from "../../../internal/utils";
import { ApprovalUrlInfo } from "./approvalurlinfo";
/**
 * Sets how new permission requests for the product are handled. "allPermissions" automatically approves all current and future permissions for the product. "currentPermissionsOnly" approves the current set of permissions for the product, but any future permissions added through updates will require manual reapproval. If not specified, only the current set of permissions will be approved.
 */
export declare enum ProductsApproveRequestApprovedPermissionsEnum {
    CurrentPermissionsOnly = "currentPermissionsOnly",
    AllPermissions = "allPermissions"
}
export declare class ProductsApproveRequest extends SpeakeasyBase {
    /**
     * Information on an approval URL.
     */
    approvalUrlInfo?: ApprovalUrlInfo;
    /**
     * Sets how new permission requests for the product are handled. "allPermissions" automatically approves all current and future permissions for the product. "currentPermissionsOnly" approves the current set of permissions for the product, but any future permissions added through updates will require manual reapproval. If not specified, only the current set of permissions will be approved.
     */
    approvedPermissions?: ProductsApproveRequestApprovedPermissionsEnum;
}
