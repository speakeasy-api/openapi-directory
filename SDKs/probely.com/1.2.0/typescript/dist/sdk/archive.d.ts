import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * If you only require a small number of active targets at a time but don't
 *
 * @remarks
 * want to lose their history by deleting one to add another it is now
 * possible to archive targets.
 * This feature is still experimental, please contact our support if you
 * are interested.
 *
 */
export declare class Archive {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Activate targets
     */
    postTargetsActivate(req: string[], config?: AxiosRequestConfig): Promise<operations.PostTargetsActivateResponse>;
    /**
     * Archive targets
     */
    postTargetsArchive(req: string[], config?: AxiosRequestConfig): Promise<operations.PostTargetsArchiveResponse>;
    /**
     * List archived targets
     */
    postTargetsArchived(req: string[], config?: AxiosRequestConfig): Promise<operations.PostTargetsArchivedResponse>;
}
