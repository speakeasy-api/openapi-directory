import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A reward program provides the details for a rewards program for a group. Different rewards programs can be created for different periods of time specified by the start_at and end_at dates. A reward program can activated for a patient any time between these dates. An activated reward program for a patient is called a reward program activation.
 */
export declare class RewardProgram {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a reward program
     *
     * @remarks
     * Create a reward program for a group.
     */
    createRewardProgram(req: shared.CreateRewardProgramRequest, config?: AxiosRequestConfig): Promise<operations.CreateRewardProgramResponse>;
    /**
     * Get a reward program
     *
     * @remarks
     * Get a reward program record by id.
     */
    fetchRewardProgram(req: operations.FetchRewardProgramRequest, config?: AxiosRequestConfig): Promise<operations.FetchRewardProgramResponse>;
    /**
     * Get group for a reward program
     *
     * @remarks
     * Get the group related to a reward program.
     */
    fetchRewardProgramGroup(req: operations.FetchRewardProgramGroupRequest, config?: AxiosRequestConfig): Promise<operations.FetchRewardProgramGroupResponse>;
    /**
     * List reward programs
     *
     * @remarks
     * Get a list of reward programs matching the specified filters.
     */
    fetchRewardPrograms(req: operations.FetchRewardProgramsRequest, config?: AxiosRequestConfig): Promise<operations.FetchRewardProgramsResponse>;
}
