import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomMusic {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create rendered audio
     *
     * @remarks
     * This endpoint creates rendered audio from timeline data. It returns a render ID that you can use to download the finished audio when it is ready. The render ID is valid for up to 48 hours.
     */
    createAudioRenders(req: shared.CreateAudioRendersRequest, security: operations.CreateAudioRendersSecurity, config?: AxiosRequestConfig): Promise<operations.CreateAudioRendersResponse>;
    /**
     * Get details about audio renders
     *
     * @remarks
     * This endpoint shows the status of one or more audio renders, including download links for completed audio.
     */
    fetchRenders(req: operations.FetchRendersRequest, security: operations.FetchRendersSecurity, config?: AxiosRequestConfig): Promise<operations.FetchRendersResponse>;
    /**
     * List computer audio descriptors
     *
     * @remarks
     * This endpoint lists the descriptors that you can use in the audio regions in an audio render.
     */
    listCustomDescriptors(req: operations.ListCustomDescriptorsRequest, security: operations.ListCustomDescriptorsSecurity, config?: AxiosRequestConfig): Promise<operations.ListCustomDescriptorsResponse>;
    /**
     * List computer audio instruments
     *
     * @remarks
     * This endpoint lists the instruments that you can include in computer audio. If you specify more than one search parameter, the API uses an AND condition.
     */
    listCustomInstruments(req: operations.ListCustomInstrumentsRequest, security: operations.ListCustomInstrumentsSecurity, config?: AxiosRequestConfig): Promise<operations.ListCustomInstrumentsResponse>;
}
