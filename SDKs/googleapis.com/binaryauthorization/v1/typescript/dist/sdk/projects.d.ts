import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.
     */
    binaryauthorizationProjectsAttestorsCreate(req: operations.BinaryauthorizationProjectsAttestorsCreateRequest, security: operations.BinaryauthorizationProjectsAttestorsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationProjectsAttestorsCreateResponse>;
    /**
     * Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.
     */
    binaryauthorizationProjectsAttestorsDelete(req: operations.BinaryauthorizationProjectsAttestorsDeleteRequest, security: operations.BinaryauthorizationProjectsAttestorsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationProjectsAttestorsDeleteResponse>;
    /**
     * Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.
     */
    binaryauthorizationProjectsAttestorsList(req: operations.BinaryauthorizationProjectsAttestorsListRequest, security: operations.BinaryauthorizationProjectsAttestorsListSecurity, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationProjectsAttestorsListResponse>;
    /**
     * Updates an attestor. Returns NOT_FOUND if the attestor does not exist.
     */
    binaryauthorizationProjectsAttestorsUpdate(req: operations.BinaryauthorizationProjectsAttestorsUpdateRequest, security: operations.BinaryauthorizationProjectsAttestorsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationProjectsAttestorsUpdateResponse>;
    /**
     * Returns whether the given Attestation for the given image URI was signed by the given Attestor
     */
    binaryauthorizationProjectsAttestorsValidateAttestationOccurrence(req: operations.BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest, security: operations.BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceSecurity, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    binaryauthorizationProjectsPolicyGetIamPolicy(req: operations.BinaryauthorizationProjectsPolicyGetIamPolicyRequest, security: operations.BinaryauthorizationProjectsPolicyGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationProjectsPolicyGetIamPolicyResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    binaryauthorizationProjectsPolicySetIamPolicy(req: operations.BinaryauthorizationProjectsPolicySetIamPolicyRequest, security: operations.BinaryauthorizationProjectsPolicySetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationProjectsPolicySetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    binaryauthorizationProjectsPolicyTestIamPermissions(req: operations.BinaryauthorizationProjectsPolicyTestIamPermissionsRequest, security: operations.BinaryauthorizationProjectsPolicyTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationProjectsPolicyTestIamPermissionsResponse>;
}
