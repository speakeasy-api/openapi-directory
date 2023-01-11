import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BusinessUsers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteSetupV1BusinessusersId - Permanently deletes businessUser object.
     *
     * Use this endpoint to permanently delete a businessUser.
    **/
    deleteSetupV1BusinessusersId(req: operations.DeleteSetupV1BusinessusersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSetupV1BusinessusersIdResponse>;
    /**
     * getSetupV1Businessusers - Returns a list of business users.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1Businessusers(req: operations.GetSetupV1BusinessusersRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1BusinessusersResponse>;
    /**
     * getSetupV1BusinessusersPermissions - Returns a list of system roles and permission.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1BusinessusersPermissions(req: operations.GetSetupV1BusinessusersPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1BusinessusersPermissionsResponse>;
    /**
     * getSetupV1BusinessusersEmailCompanies - Returns a list of companies for the business user.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    getSetupV1BusinessusersEmailCompanies(req: operations.GetSetupV1BusinessusersEmailCompaniesRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1BusinessusersEmailCompaniesResponse>;
    /**
     * getSetupV1BusinessusersId - Returns a businessUser object.
     *
     * The result returned is a single businessUser object. An id is required to find the businessUser. Find businessUser id's using the GET setup/v1/businessuserts end point,
    **/
    getSetupV1BusinessusersId(req: operations.GetSetupV1BusinessusersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSetupV1BusinessusersIdResponse>;
    /**
     * postSetupV1Businessusers - Creates a new businessUser object.
     *
     * Use this endpoint to create a new businessUser. If not specified the business location id defaults to the first location in the company.
     * Name, Email Address and role are required for creating a new businessUser. If the businessUser is a bookable resource then resourceId is required.
     * For role, use one of the values listed below. Do not include what is shown in brackets, this is there for description of the role only.
     *
     * Business Roles:
     * bizowner (Business Owner)
     * bizadmin (Business Administrator)
     * bizresource (Business User - Bookable Resource)
     * bizclerk (Business User - Portal Booking Privileges)
     * bizuser (Business User - Portal View Only Privileges)
    **/
    postSetupV1Businessusers(req: operations.PostSetupV1BusinessusersRequest, config?: AxiosRequestConfig): Promise<operations.PostSetupV1BusinessusersResponse>;
    /**
     * putSetupV1BusinessusersId - Updates a businessUser object.
     *
     * Use this endpoint to update a businessUser.
    **/
    putSetupV1BusinessusersId(req: operations.PutSetupV1BusinessusersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSetupV1BusinessusersIdResponse>;
}
