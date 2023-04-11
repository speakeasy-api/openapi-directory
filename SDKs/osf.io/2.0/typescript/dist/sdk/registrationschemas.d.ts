import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A Registration Schemas defines the range of valid responses to a registration. Each Registration Schema is composed of <a href="#tag/Registration-Schema-Blocks">"blocks"</a> that define the individual questions a user responds to. Registration Schemas are created by the Center for Open Science or an affiliated institution and periodically migrated into the system. Registration Schemas are updated and deactivated using an internal versioning system.
 */
export declare class RegistrationSchemas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a Registration Schema
     *
     * @remarks
     * Retrieves the details of a given Registration Schema. Registration Schemas defines the desired supplemental information that should accompany be included in a Registration. Registration Schemas are Read-only to API users.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested Registration Schemas, if the request is successful.
     * #### Errors
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    registrationSchemaRead(req: operations.RegistrationSchemaReadRequest, config?: AxiosRequestConfig): Promise<operations.RegistrationSchemaReadResponse>;
    /**
     * Retrieve a list of Registration Schemas
     *
     * @remarks
     * Retrieve a paginated list of all active Registration Schemas. Registration Schemas describe the supplemental questions that accompany a registration. Registration Schemas are read-only for API users.
     * #### Returns
     * Returns a JSON object containing `data` and `links` keys.
     * The `data` key contains an array of 10 Registration Schemas. Each resource in the array is a separate Registration Schemas object.
     * The `links` key contains a dictionary of links that can be used for [pagination](#tag/Pagination).
     * #### Errors
     * This request should never return an error.
     */
    registrationSchemasList(config?: AxiosRequestConfig): Promise<operations.RegistrationSchemasListResponse>;
}
