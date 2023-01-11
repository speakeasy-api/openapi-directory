import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SecurityAndNetworking {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * emailVerify - Email Verify
     *
     * SMTP based email address verification
    **/
    emailVerify(req: operations.EmailVerifyRequest, config?: AxiosRequestConfig): Promise<operations.EmailVerifyResponse>;
    /**
     * hostReputation - Host Reputation
     *
     * Check the reputation of an IP address, domain name or URL against a comprehensive list of blacklists and blocklists
    **/
    hostReputation(req: operations.HostReputationRequest, config?: AxiosRequestConfig): Promise<operations.HostReputationResponse>;
    /**
     * ipBlocklist - IP Blocklist
     *
     * The IP Blocklist API will detect potentially malicious or dangerous IP addresses
    **/
    ipBlocklist(req: operations.IpBlocklistRequest, config?: AxiosRequestConfig): Promise<operations.IpBlocklistResponse>;
    /**
     * ipBlocklistDownload - IP Blocklist Download
     *
     * This API is a direct feed to our IP blocklist data
    **/
    ipBlocklistDownload(req: operations.IpBlocklistDownloadRequest, config?: AxiosRequestConfig): Promise<operations.IpBlocklistDownloadResponse>;
    /**
     * ipProbe - IP Probe
     *
     * Analyze and extract provider information for an IP address
    **/
    ipProbe(req: operations.IpProbeRequest, config?: AxiosRequestConfig): Promise<operations.IpProbeResponse>;
}
