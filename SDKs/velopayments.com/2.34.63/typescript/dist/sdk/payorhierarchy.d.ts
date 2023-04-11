import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * <p>Payors that are part of the same organization can be linked together in a hierarchical fashion</p>
 *
 * @remarks
 * <p>Payors higher up in the tree can read and write data on behalf of payors below them</p>
 * <p>For example Payor A can make payouts on behalf of Payor B if Payor B is linked below Payor A</p>
 * <p>Payors can not access data of payors above them in the hierarchy</p>
 * <p>Contact Velo if you need to link payors in your organization</p>
 *
 */
export declare class PayorHierarchy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Payor Links
     *
     * @remarks
     * <p>If the payor is set up as part of a hierarchy you can use this API to traverse the hierarchy</p>
     *
     */
    payorLinksV1(req: operations.PayorLinksV1Request, config?: AxiosRequestConfig): Promise<operations.PayorLinksV1Response>;
}
