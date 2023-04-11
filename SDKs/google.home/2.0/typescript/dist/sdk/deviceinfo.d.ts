import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints in this folder give information about the device.
 */
export declare class DeviceInfo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * App Device ID
     *
     * @remarks
     * This gives "app device id", "certificate" and "signed data".
     * The `app_id` in the request is mandatory and refers to Chromecast backdrop/screensaver app. It has to be set to `E8C28D3C`.
     *
     * The certificate is valid and issued by `Chromecast ICA 6 (Audio Assist), Google Inc`.
     *
     * Not sure what the other two are.
     */
    appDeviceID(req: shared.AppDeviceIDRequest, config?: AxiosRequestConfig): Promise<operations.AppDeviceIDResponse>;
    /**
     * Check Ready Status
     *
     * @remarks
     * **Update:** This seems to have changed now and is no longer possible. The error is also new.
     *
     * Setting `play_ready_message` to true plays a welcome message on the device saying "Hi, I'm your Google Assistant. I'm here to help. To learn a few things you can do, continue in the Google Home app."
     */
    checkReadyStatus(req: shared.CheckReadyStatusRequest, config?: AxiosRequestConfig): Promise<operations.CheckReadyStatusResponse>;
    /**
     * Eureka Info
     *
     * @remarks
     * This gives most of the device info. The GET parameter `param` is a comma separated list of json keys to fetch. Currently, these params are known: `version,audio,name,build_info,detail,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer,sign,aogh,ultrasound,mesh`
     *
     * Nested items can also be filtered using the dot notation. Example: `audio.digital`
     *
     * The `options` GET parameter is always set to `detail` or `detail,sign`. `sign` signs the `nonce` and returns some value.
     *
     * The `nonce` GET parameter is an integer value signed with needed (see `option` parameter above).
     */
    eurekaInfo(req: operations.EurekaInfoRequest, config?: AxiosRequestConfig): Promise<operations.EurekaInfoResponse>;
    /**
     * Locales
     *
     * @remarks
     * Simply returns a list of all supported locales.
     */
    locales(config?: AxiosRequestConfig): Promise<operations.LocalesResponse>;
    /**
     * Offer
     *
     * @remarks
     * This gives a token which is used by the Home app to get offers. The offers themselves are not stored on the device.
     * A new token is generated for every request.
     */
    offer(config?: AxiosRequestConfig): Promise<operations.OfferResponse>;
    /**
     * Test Internet Download Speed
     *
     * @remarks
     * **Update:** This seems to have been removed. Returns 404 Not Found.
     *
     * This endpoint tests internet download speed. Any sample file URL can be provided.
     */
    testInternetDownloadSpeed(req: shared.TestInternetDownloadSpeedRequest, config?: AxiosRequestConfig): Promise<operations.TestInternetDownloadSpeedResponse>;
    /**
     * Timezones
     *
     * @remarks
     * Simply returns a list of all supported timezones.
     */
    timezones(config?: AxiosRequestConfig): Promise<operations.TimezonesResponse>;
}
