import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The service the credentials are for.
 */
export declare enum CredentialTypeEnum {
    MiradoreApiKeyV1 = "miradore_api_key_v1",
    AwsAccessSecret = "aws_access_secret",
    CrowdstrikeApiKey = "crowdstrike_api_key",
    AzureClientSecret = "azure_client_secret",
    AzureUsernamePassword = "azure_username_password",
    CensysSearchApiKey = "censys_search_api_key",
    Snmpv2Community = "snmpv2_community",
    Snmpv3Credential = "snmpv3_credential",
    VmwareUsernamePassword = "vmware_username_password"
}
/**
 * credential details
 */
export declare class Credential extends SpeakeasyBase {
    acl?: Record<string, any>;
    cidrs?: string[];
    clientId?: string;
    createdAt?: number;
    createdByEmail?: string;
    createdById?: string;
    global?: boolean;
    id: string;
    lastUsedAt?: number;
    lastUsedById?: string;
    name?: string;
    /**
     * The service the credentials are for.
     */
    type?: CredentialTypeEnum;
}
