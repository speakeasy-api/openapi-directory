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
     * Links a Google Cloud Storage bucket to a Firebase project.
     */
    firebasestorageProjectsBucketsAddFirebase(req: operations.FirebasestorageProjectsBucketsAddFirebaseRequest, security: operations.FirebasestorageProjectsBucketsAddFirebaseSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasestorageProjectsBucketsAddFirebaseResponse>;
    /**
     * Gets a single linked storage bucket.
     */
    firebasestorageProjectsBucketsGet(req: operations.FirebasestorageProjectsBucketsGetRequest, security: operations.FirebasestorageProjectsBucketsGetSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasestorageProjectsBucketsGetResponse>;
    /**
     * Lists the linked storage buckets for a project.
     */
    firebasestorageProjectsBucketsList(req: operations.FirebasestorageProjectsBucketsListRequest, security: operations.FirebasestorageProjectsBucketsListSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasestorageProjectsBucketsListResponse>;
    /**
     * Unlinks a linked Google Cloud Storage bucket from a Firebase project.
     */
    firebasestorageProjectsBucketsRemoveFirebase(req: operations.FirebasestorageProjectsBucketsRemoveFirebaseRequest, security: operations.FirebasestorageProjectsBucketsRemoveFirebaseSecurity, config?: AxiosRequestConfig): Promise<operations.FirebasestorageProjectsBucketsRemoveFirebaseResponse>;
}
