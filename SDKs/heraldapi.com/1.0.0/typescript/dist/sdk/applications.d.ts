import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Applications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * /applications/{application_id}
     *
     * @remarks
     * ### Get an application
     *
     * Get the latest details for a specific [application](https://www.heraldapi.com/docs/dynamic-application-steps).
     */
    getApplicationsApplicationId(req: operations.GetApplicationsApplicationIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApplicationsApplicationIdResponse>;
    /**
     * /applications
     *
     * @remarks
     * ### Create an application
     *
     * Create an [application](https://www.heraldapi.com/docs/dynamic-application) for a product or set of products. An application contains the set of information a carrier requires to get a quote for the product(s). Submitting only `products` will create a blank application. Including values when creating the application is optional.
     *
     * Read our step-by-step guide to [building a Dynamic Application](https://www.heraldapi.com/docs/dynamic-application-steps).
     */
    postApplications(req: shared.ApplicationWriteV1, config?: AxiosRequestConfig): Promise<operations.PostApplicationsResponse>;
    /**
     * /applications/{application_id}
     *
     * @remarks
     * <h3>Update an application</h3>
     *
     * Submit values for a specific application. In order to submit an application for a quote, you need to continue to update the application until the status is `complete`.
     *
     * Read our step-by-step guide to [building a Dynamic Application](https://www.heraldapi.com/docs/dynamic-application-steps).
     */
    putApplicationsApplicationId(req: operations.PutApplicationsApplicationIdRequest, config?: AxiosRequestConfig): Promise<operations.PutApplicationsApplicationIdResponse>;
}
