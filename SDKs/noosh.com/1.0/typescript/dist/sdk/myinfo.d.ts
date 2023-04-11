import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MyInfo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List current user's automatic invitations info
     *
     * @remarks
     * List current user's automatic invitations info
     */
    getAutomaticInvitationList(req: operations.GetAutomaticInvitationListRequest, config?: AxiosRequestConfig): Promise<operations.GetAutomaticInvitationListResponse>;
    /**
     * Get current user's team template detal info
     *
     * @remarks
     * Get current user's team template detal info
     */
    getTeamTemplateDetail(req: operations.GetTeamTemplateDetailRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamTemplateDetailResponse>;
    /**
     * List current user's team templates info
     *
     * @remarks
     * List current user's team templates info
     */
    getTeamTemplateList(req: operations.GetTeamTemplateListRequest, config?: AxiosRequestConfig): Promise<operations.GetTeamTemplateListResponse>;
    /**
     * Upload Profile Image.  A multipart/form-data request with a name "file"
     *
     * @remarks
     * Upload Profile Image.  A multipart/form-data request with a name "file"
     */
    uploadProfileImage(req: operations.UploadProfileImageRequest, config?: AxiosRequestConfig): Promise<operations.UploadProfileImageResponse>;
}
