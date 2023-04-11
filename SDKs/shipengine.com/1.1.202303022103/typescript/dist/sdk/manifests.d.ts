import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * manifests
 *
 * @remarks
 *
 */
export declare class Manifests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Manifest
     *
     * @remarks
     * Each ShipEngine manifest is created for a specific warehouse, so you'll need to provide the warehouse_id
     * rather than the ship_from address. You can create a warehouse for each location that you want to create manifests for.
     *
     */
    createManifest(req: any, config?: AxiosRequestConfig): Promise<operations.CreateManifestResponse>;
    /**
     * Get Manifest By Id
     *
     * @remarks
     * Get Manifest By Id
     */
    getManifestById(req: operations.GetManifestByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetManifestByIdResponse>;
    /**
     * Get Manifest Request By Id
     *
     * @remarks
     * Get Manifest Request By Id
     */
    getManifestRequestById(req: operations.GetManifestRequestByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetManifestRequestByIdResponse>;
    /**
     * List Manifests
     *
     * @remarks
     * Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.
     */
    listManifests(req: operations.ListManifestsRequest, config?: AxiosRequestConfig): Promise<operations.ListManifestsResponse>;
}
