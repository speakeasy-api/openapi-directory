import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * In Probely, a target is what defines what is being scanned.
 *
 * @remarks
 * Connected to a target there are two other objects: a site and a list of
 * assets.
 *
 * The site is the where the scan starts and will usually be the main
 * entry point for your web application.
 *
 * As things are today, a single URL is not enough to describe all of the
 * resources an application uses.
 * For example, a modern single page web application might load the main
 * page from one domain and make AJAX requests to one or more other domains.
 * This where assets come in, they are used to add extra domains that
 * our scanner should follow.
 *
 */
export declare class Targets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete target
     */
    deleteTargetsId(req: operations.DeleteTargetsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTargetsIdResponse>;
    /**
     * List targets
     */
    getTargets(req: operations.GetTargetsRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsResponse>;
    /**
     * Retrieve target
     */
    getTargetsId(req: operations.GetTargetsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTargetsIdResponse>;
    /**
     * Partial update target
     */
    patchTargetsId(req: operations.PatchTargetsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchTargetsIdResponse>;
    /**
     * Create target
     */
    postTargets(req: shared.TargetInput, config?: AxiosRequestConfig): Promise<operations.PostTargetsResponse>;
    /**
     * Update target
     */
    putTargetsId(req: operations.PutTargetsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutTargetsIdResponse>;
}
