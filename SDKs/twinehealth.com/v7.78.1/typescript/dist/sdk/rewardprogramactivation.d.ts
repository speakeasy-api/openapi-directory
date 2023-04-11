import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A reward program activation is the activation of a reward program for a specific patient.
 */
export declare class RewardProgramActivation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a reward program activation
     *
     * @remarks
     * Create a reward program activation for a patient. There can only be one activation for a patient for a given reward program.
     */
    createRewardProgramActivation(req: shared.CreateRewardProgramActivationRequestInput, config?: AxiosRequestConfig): Promise<operations.CreateRewardProgramActivationResponse>;
    /**
     * Get a reward program activation
     *
     * @remarks
     * Get a reward program activationrecord by id.
     */
    fetchRewardProgramActivation(req: operations.FetchRewardProgramActivationRequest, config?: AxiosRequestConfig): Promise<operations.FetchRewardProgramActivationResponse>;
    /**
     * List reward program activations
     *
     * @remarks
     * Get a list of reward program activations matching the specified filters.
     */
    fetchRewardProgramActivations(req: operations.FetchRewardProgramActivationsRequest, config?: AxiosRequestConfig): Promise<operations.FetchRewardProgramActivationsResponse>;
}
