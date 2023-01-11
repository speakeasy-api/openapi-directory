import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CustomMusic {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAudioRenders - Create rendered audio
     *
     * This endpoint creates rendered audio from timeline data. It returns a render ID that you can use to download the finished audio when it is ready. The render ID is valid for up to 48 hours.
    **/
    createAudioRenders(req: operations.CreateAudioRendersRequest, config?: AxiosRequestConfig): Promise<operations.CreateAudioRendersResponse>;
    /**
     * fetchRenders - Get details about audio renders
     *
     * This endpoint shows the status of one or more audio renders, including download links for completed audio.
    **/
    fetchRenders(req: operations.FetchRendersRequest, config?: AxiosRequestConfig): Promise<operations.FetchRendersResponse>;
    /**
     * listCustomDescriptors - List computer audio descriptors
     *
     * This endpoint lists the descriptors that you can use in the audio regions in an audio render.
    **/
    listCustomDescriptors(req: operations.ListCustomDescriptorsRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomDescriptorsResponse>;
    /**
     * listCustomInstruments - List computer audio instruments
     *
     * This endpoint lists the instruments that you can include in computer audio. If you specify more than one search parameter, the API uses an AND condition.
    **/
    listCustomInstruments(req: operations.ListCustomInstrumentsRequest, config?: AxiosRequestConfig): Promise<operations.ListCustomInstrumentsResponse>;
}
