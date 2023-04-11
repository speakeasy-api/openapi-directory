import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PacketMirrorings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of packetMirrorings.
     */
    computePacketMirroringsAggregatedList(req: operations.ComputePacketMirroringsAggregatedListRequest, security: operations.ComputePacketMirroringsAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePacketMirroringsAggregatedListResponse>;
    /**
     * Deletes the specified PacketMirroring resource.
     */
    computePacketMirroringsDelete(req: operations.ComputePacketMirroringsDeleteRequest, security: operations.ComputePacketMirroringsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePacketMirroringsDeleteResponse>;
    /**
     * Returns the specified PacketMirroring resource.
     */
    computePacketMirroringsGet(req: operations.ComputePacketMirroringsGetRequest, security: operations.ComputePacketMirroringsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePacketMirroringsGetResponse>;
    /**
     * Creates a PacketMirroring resource in the specified project and region using the data included in the request.
     */
    computePacketMirroringsInsert(req: operations.ComputePacketMirroringsInsertRequest, security: operations.ComputePacketMirroringsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePacketMirroringsInsertResponse>;
    /**
     * Retrieves a list of PacketMirroring resources available to the specified project and region.
     */
    computePacketMirroringsList(req: operations.ComputePacketMirroringsListRequest, security: operations.ComputePacketMirroringsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePacketMirroringsListResponse>;
    /**
     * Patches the specified PacketMirroring resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
     */
    computePacketMirroringsPatch(req: operations.ComputePacketMirroringsPatchRequest, security: operations.ComputePacketMirroringsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePacketMirroringsPatchResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computePacketMirroringsTestIamPermissions(req: operations.ComputePacketMirroringsTestIamPermissionsRequest, security: operations.ComputePacketMirroringsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputePacketMirroringsTestIamPermissionsResponse>;
}
