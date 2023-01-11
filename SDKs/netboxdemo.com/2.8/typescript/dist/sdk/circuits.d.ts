import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Circuits {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    circuitsCircuitTerminationsCreate(req: operations.CircuitsCircuitTerminationsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTerminationsCreateResponse>;
    circuitsCircuitTerminationsDelete(req: operations.CircuitsCircuitTerminationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTerminationsDeleteResponse>;
    /**
     * circuitsCircuitTerminationsList - Call to super to allow for caching
    **/
    circuitsCircuitTerminationsList(req: operations.CircuitsCircuitTerminationsListRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTerminationsListResponse>;
    circuitsCircuitTerminationsPartialUpdate(req: operations.CircuitsCircuitTerminationsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTerminationsPartialUpdateResponse>;
    /**
     * circuitsCircuitTerminationsRead - Call to super to allow for caching
    **/
    circuitsCircuitTerminationsRead(req: operations.CircuitsCircuitTerminationsReadRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTerminationsReadResponse>;
    circuitsCircuitTerminationsUpdate(req: operations.CircuitsCircuitTerminationsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTerminationsUpdateResponse>;
    circuitsCircuitTypesCreate(req: operations.CircuitsCircuitTypesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTypesCreateResponse>;
    circuitsCircuitTypesDelete(req: operations.CircuitsCircuitTypesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTypesDeleteResponse>;
    /**
     * circuitsCircuitTypesList - Call to super to allow for caching
    **/
    circuitsCircuitTypesList(req: operations.CircuitsCircuitTypesListRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTypesListResponse>;
    circuitsCircuitTypesPartialUpdate(req: operations.CircuitsCircuitTypesPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTypesPartialUpdateResponse>;
    /**
     * circuitsCircuitTypesRead - Call to super to allow for caching
    **/
    circuitsCircuitTypesRead(req: operations.CircuitsCircuitTypesReadRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTypesReadResponse>;
    circuitsCircuitTypesUpdate(req: operations.CircuitsCircuitTypesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitTypesUpdateResponse>;
    circuitsCircuitsCreate(req: operations.CircuitsCircuitsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitsCreateResponse>;
    circuitsCircuitsDelete(req: operations.CircuitsCircuitsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitsDeleteResponse>;
    /**
     * circuitsCircuitsList - Call to super to allow for caching
    **/
    circuitsCircuitsList(req: operations.CircuitsCircuitsListRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitsListResponse>;
    circuitsCircuitsPartialUpdate(req: operations.CircuitsCircuitsPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitsPartialUpdateResponse>;
    /**
     * circuitsCircuitsRead - Call to super to allow for caching
    **/
    circuitsCircuitsRead(req: operations.CircuitsCircuitsReadRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitsReadResponse>;
    circuitsCircuitsUpdate(req: operations.CircuitsCircuitsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsCircuitsUpdateResponse>;
    circuitsProvidersCreate(req: operations.CircuitsProvidersCreateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsProvidersCreateResponse>;
    circuitsProvidersDelete(req: operations.CircuitsProvidersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsProvidersDeleteResponse>;
    /**
     * circuitsProvidersGraphs - A convenience method for rendering graphs for a particular provider.
    **/
    circuitsProvidersGraphs(req: operations.CircuitsProvidersGraphsRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsProvidersGraphsResponse>;
    /**
     * circuitsProvidersList - Call to super to allow for caching
    **/
    circuitsProvidersList(req: operations.CircuitsProvidersListRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsProvidersListResponse>;
    circuitsProvidersPartialUpdate(req: operations.CircuitsProvidersPartialUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsProvidersPartialUpdateResponse>;
    /**
     * circuitsProvidersRead - Call to super to allow for caching
    **/
    circuitsProvidersRead(req: operations.CircuitsProvidersReadRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsProvidersReadResponse>;
    circuitsProvidersUpdate(req: operations.CircuitsProvidersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CircuitsProvidersUpdateResponse>;
}
