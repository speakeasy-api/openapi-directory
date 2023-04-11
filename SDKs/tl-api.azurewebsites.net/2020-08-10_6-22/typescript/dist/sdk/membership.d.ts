import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Membership {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all of the members details
     * This will return all properties related to member entity
     *
     */
    membershipGet(config?: AxiosRequestConfig): Promise<operations.MembershipGetResponse>;
    /**
     * Add new Member
     *
     */
    membershipPost(req: shared.MemberDTO, config?: AxiosRequestConfig): Promise<operations.MembershipPostResponse>;
}
