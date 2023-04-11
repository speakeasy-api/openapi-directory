import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Fleet is a group of clients under a given a name. For the purposes of identification and visualisation, the Fleet object has its own properties (e.g. logo), the most important of which is the `members`, which contains the user objects of the fleet.
 */
export declare class Fleet {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a Fleet
     *
     * @remarks
     * Use this endpoint to generate a random group of clients. The feleet is generated in a deterministic way, on the basis of a fleet name given as a path parameter.
     * In the case of identical fleet names, the endpoint will generate the same fleet object. The properties of the generated fleet object are randomly generated on the basis of the fleet name.
     * In lack of a fleet name, all calls generate a different fleet object to the randomly generated fleet name.
     */
    getFleetFleetname(req: operations.GetFleetFleetnameRequest, config?: AxiosRequestConfig): Promise<operations.GetFleetFleetnameResponse>;
}
