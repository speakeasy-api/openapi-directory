import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LicenseAssignments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Revoke a license.
     */
    licensingLicenseAssignmentsDelete(req: operations.LicensingLicenseAssignmentsDeleteRequest, security: operations.LicensingLicenseAssignmentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsDeleteResponse>;
    /**
     * Get a specific user's license by product SKU.
     */
    licensingLicenseAssignmentsGet(req: operations.LicensingLicenseAssignmentsGetRequest, security: operations.LicensingLicenseAssignmentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsGetResponse>;
    /**
     * Assign a license.
     */
    licensingLicenseAssignmentsInsert(req: operations.LicensingLicenseAssignmentsInsertRequest, security: operations.LicensingLicenseAssignmentsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsInsertResponse>;
    /**
     * List all users assigned licenses for a specific product SKU.
     */
    licensingLicenseAssignmentsListForProduct(req: operations.LicensingLicenseAssignmentsListForProductRequest, security: operations.LicensingLicenseAssignmentsListForProductSecurity, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsListForProductResponse>;
    /**
     * List all users assigned licenses for a specific product SKU.
     */
    licensingLicenseAssignmentsListForProductAndSku(req: operations.LicensingLicenseAssignmentsListForProductAndSkuRequest, security: operations.LicensingLicenseAssignmentsListForProductAndSkuSecurity, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsListForProductAndSkuResponse>;
    /**
     * Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
     */
    licensingLicenseAssignmentsPatch(req: operations.LicensingLicenseAssignmentsPatchRequest, security: operations.LicensingLicenseAssignmentsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsPatchResponse>;
    /**
     * Reassign a user's product SKU with a different SKU in the same product.
     */
    licensingLicenseAssignmentsUpdate(req: operations.LicensingLicenseAssignmentsUpdateRequest, security: operations.LicensingLicenseAssignmentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.LicensingLicenseAssignmentsUpdateResponse>;
}
