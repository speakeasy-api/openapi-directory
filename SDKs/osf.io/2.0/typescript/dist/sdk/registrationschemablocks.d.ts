import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Registration Schema Blocks are read-only entities, they represent question prompts and form inputs known as "blocks" that make up a Registration Schemas. Each block has a designated `block_type` that determines what type of information that Schema Block's corresponding block in the Schema Response.
 */
export declare class RegistrationSchemaBlocks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a Registration Schema Block
     *
     * @remarks
     * This returns a Registration Schema Block by it's ID.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested Registration Schemas, if the request is successful.
     * #### Errors
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    getSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockId(req: operations.GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemaResponsesSchemaResponseIdSchemaBlocksSchemaResponseBlockIdResponse>;
    /**
     * Retrieve a list of Registration Schema Blocks for a Schema Response
     *
     * @remarks
     * This returns a list of all the Registration Schema Blocks are contained in Registration Schema.
     * #### Returns
     * Returns a JSON object with a `data` key containing the representation of the requested Registration Schemas, if the request is successful.
     * #### Errors
     * If the request is unsuccessful, an `errors` key containing information about the failure will be returned. Refer to the [list of error codes](#tag/Errors-and-Error-Codes) to understand why this request may have failed.
     */
    schemaResponseBlocksRead(req: operations.SchemaResponseBlocksReadRequest, config?: AxiosRequestConfig): Promise<operations.SchemaResponseBlocksReadResponse>;
}
