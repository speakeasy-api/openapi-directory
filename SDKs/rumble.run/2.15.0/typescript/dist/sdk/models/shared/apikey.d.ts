import { SpeakeasyBase } from "../../../internal/utils";
/**
 * key details
 */
export declare class APIKey extends SpeakeasyBase {
    clientId?: string;
    comment?: string;
    counter?: number;
    createdAt?: number;
    createdBy?: string;
    id: string;
    inactive?: boolean;
    lastUsedAt?: number;
    lastUsedIp?: string;
    lastUsedUa?: string;
    organizationId?: string;
    token?: string;
    type?: string;
    usageLimit?: number;
    usageToday?: number;
}
