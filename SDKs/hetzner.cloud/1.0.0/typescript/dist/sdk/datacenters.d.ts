import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Each Datacenter represents a *virtual* Datacenter which is made up of possible many physical Datacenters where Servers are hosted.
 *
 * @remarks
 *
 * Datacenter names are composed from their Location and virtual Datacenter number, for example `fsn1-dc14` means virtual Datacenter `14` in Location `fsn1`.
 *
 * Right now there is only one Datacenter for each Location. The Datacenter numbers for `fsn`, `nbg` and `hel` are arbitrarily set to `14`, `3` and `2` for historic reasons and do not represent real physical Hetzner datacenters.
 *
 */
export declare class Datacenters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all Datacenters
     *
     * @remarks
     * Returns all Datacenter objects.
     */
    getDatacenters(req: operations.GetDatacentersRequest, config?: AxiosRequestConfig): Promise<operations.GetDatacentersResponse>;
    /**
     * Get a Datacenter
     *
     * @remarks
     * Returns a specific Datacenter object.
     */
    getDatacentersId(req: operations.GetDatacentersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDatacentersIdResponse>;
}
