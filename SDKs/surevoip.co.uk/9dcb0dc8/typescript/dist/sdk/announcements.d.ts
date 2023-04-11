import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Announcements that can be played during or before a call
 */
export declare class Announcements {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an announcement audio file
     */
    deleteCustomersAccountAnnouncementsAnnouncementId(req: operations.DeleteCustomersAccountAnnouncementsAnnouncementIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomersAccountAnnouncementsAnnouncementIdResponse>;
    /**
     * List global announcements
     */
    getAnnouncements(config?: AxiosRequestConfig): Promise<operations.GetAnnouncementsResponse>;
    /**
     * List of announcement audio files
     */
    getCustomersAccountAnnouncements(req: operations.GetCustomersAccountAnnouncementsRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersAccountAnnouncementsResponse>;
    /**
     * Represents an announcement audio file
     */
    getCustomersAccountAnnouncementsAnnouncementId(req: operations.GetCustomersAccountAnnouncementsAnnouncementIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersAccountAnnouncementsAnnouncementIdResponse>;
    /**
     * Add a new announcement audio file
     */
    postAnnouncements(req: operations.PostAnnouncementsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostAnnouncementsResponse>;
}
