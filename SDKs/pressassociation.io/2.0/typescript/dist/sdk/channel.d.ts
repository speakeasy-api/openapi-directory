import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Channel {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Channel Detail
     *
     * @remarks
     * Return the content of the selected channel.
     */
    getChannel(req: operations.GetChannelRequest, security: operations.GetChannelSecurity, config?: AxiosRequestConfig): Promise<operations.GetChannelResponse>;
    /**
     * Channel Collection
     *
     * @remarks
     * If you are interested in a list of channels that have had there schedule updated you can filter by the following query params.
     *  - scheduleStart
     *  - scheduleEnd
     *  - scheduleUpdatedSince
     *
     * adding these query params will filter the channel collection to only return channels that have been updated within the given range, updatedSince stores the state of your previous call.
     *
     * Example Usage: Every 10 minutes get me the channels that have updated schedules for the next 2 weeks.
     *
     * /channel?platform={uuid}&scheduleStart={today}&scheduleEnd={today + 2 weeks}&updatedSince={10 minutes ago}
     *
     * Also please note epg numbers are only exposed when a platform and region are passed to the query.
     */
    listChannels(req: operations.ListChannelsRequest, security: operations.ListChannelsSecurity, config?: AxiosRequestConfig): Promise<operations.ListChannelsResponse>;
}
