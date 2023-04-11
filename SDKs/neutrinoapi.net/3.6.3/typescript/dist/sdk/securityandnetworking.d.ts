import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SecurityAndNetworking {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Email Verify
     *
     * @remarks
     * SMTP based email address verification
     */
    emailVerify(req: operations.EmailVerifyRequest, config?: AxiosRequestConfig): Promise<operations.EmailVerifyResponse>;
    /**
     * Host Reputation
     *
     * @remarks
     * Check the reputation of an IP address, domain name or URL against a comprehensive list of blacklists and blocklists
     */
    hostReputation(req: operations.HostReputationRequest, config?: AxiosRequestConfig): Promise<operations.HostReputationResponse>;
    /**
     * IP Blocklist
     *
     * @remarks
     * The IP Blocklist API will detect potentially malicious or dangerous IP addresses
     */
    ipBlocklist(req: operations.IPBlocklistRequest, config?: AxiosRequestConfig): Promise<operations.IPBlocklistResponse>;
    /**
     * IP Blocklist Download
     *
     * @remarks
     * This API is a direct feed to our IP blocklist data
     */
    ipBlocklistDownload(req: operations.IPBlocklistDownloadRequest, config?: AxiosRequestConfig): Promise<operations.IPBlocklistDownloadResponse>;
    /**
     * IP Probe
     *
     * @remarks
     * Execute a realtime network probe against an IPv4 or IPv6 address
     */
    ipProbe(req: operations.IPProbeRequest, config?: AxiosRequestConfig): Promise<operations.IPProbeResponse>;
}
