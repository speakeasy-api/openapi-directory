import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Announcements {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteCustomersAccountAnnouncementsAnnouncementId - Delete an announcement audio file
    **/
    deleteCustomersAccountAnnouncementsAnnouncementId(req: operations.DeleteCustomersAccountAnnouncementsAnnouncementIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomersAccountAnnouncementsAnnouncementIdResponse>;
    /**
     * getAnnouncements - List global announcements
    **/
    getAnnouncements(config?: AxiosRequestConfig): Promise<operations.GetAnnouncementsResponse>;
    /**
     * getCustomersAccountAnnouncements - List of announcement audio files
    **/
    getCustomersAccountAnnouncements(req: operations.GetCustomersAccountAnnouncementsRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersAccountAnnouncementsResponse>;
    /**
     * getCustomersAccountAnnouncementsAnnouncementId - Represents an announcement audio file
    **/
    getCustomersAccountAnnouncementsAnnouncementId(req: operations.GetCustomersAccountAnnouncementsAnnouncementIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomersAccountAnnouncementsAnnouncementIdResponse>;
    /**
     * postAnnouncements - Add a new announcement audio file
    **/
    postAnnouncements(req: operations.PostAnnouncementsRequest, config?: AxiosRequestConfig): Promise<operations.PostAnnouncementsResponse>;
}
