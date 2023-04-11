import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Recording Settings Information
 */
export declare class RecordingSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch recording setting
     *
     * @remarks
     * Fetches the recording status for a given phone number, based on Do Not Record and Recording Governance for your team.
     * Phone number should be in E.164 format.
     *
     */
    getV2PhoneNumbersRecordingSettingsIdJson(req: operations.GetV2PhoneNumbersRecordingSettingsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2PhoneNumbersRecordingSettingsIdJsonResponse>;
}
