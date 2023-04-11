import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ScanOptionsScanFrequencyEnum {
    Once = "once",
    Hourly = "hourly",
    Daily = "daily",
    Weekly = "weekly",
    Monthly = "monthly",
    Continuous = "continuous"
}
export declare class ScanOptions extends SpeakeasyBase {
    agent?: string;
    excludes?: string;
    hostPing?: string;
    maxAttempts?: string;
    maxGroupSize?: string;
    maxHostRate?: string;
    maxSockets?: string;
    maxTtl?: string;
    nameservers?: string;
    passes?: string;
    /**
     * Optional probe list, otherwise all probes are used
     */
    probes?: string;
    rate?: string;
    scanDescription?: string;
    scanFrequency?: ScanOptionsScanFrequencyEnum;
    scanGracePeriod?: string;
    scanName?: string;
    scanStart?: string;
    scanTags?: string;
    screenshots?: string;
    subnetPing?: string;
    subnetPingNetSize?: string;
    subnetPingSampleRate?: string;
    targets: string;
    tcpExcludes?: string;
    tcpPorts?: string;
}
