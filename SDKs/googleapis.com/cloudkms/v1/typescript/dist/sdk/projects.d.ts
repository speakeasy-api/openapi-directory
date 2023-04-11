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
     * Creates a new EkmConnection in a given Project and Location.
     */
    cloudkmsProjectsLocationsEkmConnectionsCreate(req: operations.CloudkmsProjectsLocationsEkmConnectionsCreateRequest, security: operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsEkmConnectionsCreateResponse>;
    /**
     * Lists EkmConnections.
     */
    cloudkmsProjectsLocationsEkmConnectionsList(req: operations.CloudkmsProjectsLocationsEkmConnectionsListRequest, security: operations.CloudkmsProjectsLocationsEkmConnectionsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsEkmConnectionsListResponse>;
    /**
     * Generate random bytes using the Cloud KMS randomness source in the provided location.
     */
    cloudkmsProjectsLocationsGenerateRandomBytes(req: operations.CloudkmsProjectsLocationsGenerateRandomBytesRequest, security: operations.CloudkmsProjectsLocationsGenerateRandomBytesSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsGenerateRandomBytesResponse>;
    /**
     * Create a new KeyRing in a given Project and Location.
     */
    cloudkmsProjectsLocationsKeyRingsCreate(req: operations.CloudkmsProjectsLocationsKeyRingsCreateRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCreateResponse>;
    /**
     * Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
     */
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCreate(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateResponse>;
    /**
     * Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
     */
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptResponse>;
    /**
     * Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.
     */
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignResponse>;
    /**
     * Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.
     */
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse>;
    /**
     * Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
     */
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse>;
    /**
     * Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.
     */
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyResponse>;
    /**
     * Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.
     */
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportResponse>;
    /**
     * Lists CryptoKeyVersions.
     */
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListResponse>;
    /**
     * Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
     */
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignResponse>;
    /**
     * Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
     */
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifySecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyResponse>;
    /**
     * Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
     */
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse>;
    /**
     * Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
     */
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreResponse>;
    /**
     * Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
     */
    cloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse>;
    /**
     * Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
     */
    cloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptResponse>;
    /**
     * Lists CryptoKeys.
     */
    cloudkmsProjectsLocationsKeyRingsCryptoKeysList(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse>;
    /**
     * Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.
     */
    cloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest, security: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionResponse>;
    /**
     * Create a new ImportJob within a KeyRing. ImportJob.import_method is required.
     */
    cloudkmsProjectsLocationsKeyRingsImportJobsCreate(req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest, security: operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse>;
    /**
     * Returns metadata for a given ImportJob.
     */
    cloudkmsProjectsLocationsKeyRingsImportJobsGet(req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest, security: operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse>;
    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     */
    cloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy(req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest, security: operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse>;
    /**
     * Lists ImportJobs.
     */
    cloudkmsProjectsLocationsKeyRingsImportJobsList(req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsListRequest, security: operations.CloudkmsProjectsLocationsKeyRingsImportJobsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsListResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     */
    cloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy(req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest, security: operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     */
    cloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions(req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest, security: operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse>;
    /**
     * Lists KeyRings.
     */
    cloudkmsProjectsLocationsKeyRingsList(req: operations.CloudkmsProjectsLocationsKeyRingsListRequest, security: operations.CloudkmsProjectsLocationsKeyRingsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsListResponse>;
    /**
     * Lists information about the supported locations for this service.
     */
    cloudkmsProjectsLocationsList(req: operations.CloudkmsProjectsLocationsListRequest, security: operations.CloudkmsProjectsLocationsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsListResponse>;
}
