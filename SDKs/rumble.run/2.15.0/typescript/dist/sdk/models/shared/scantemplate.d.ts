import { SpeakeasyBase } from "../../../internal/utils";
/**
 * scan template
 */
export declare class ScanTemplate extends SpeakeasyBase {
    acl: Record<string, any>;
    agentId?: string;
    clientId?: string;
    createdAt?: number;
    createdBy?: string;
    createdByUserId?: string;
    cruncherId?: string;
    description?: string;
    error?: string;
    global: boolean;
    gracePeriod?: string;
    hidden?: boolean;
    hostedZoneId?: string;
    id: string;
    linkedTaskCount?: number;
    name?: string;
    organizationId?: string;
    params?: Record<string, string>;
    parentId?: string;
    recur?: boolean;
    recurFrequency?: string;
    recurLast?: number;
    recurLastTaskId?: string;
    recurNext?: number;
    siteId?: string;
    sizeData?: number;
    sizeResults?: number;
    sizeSite?: number;
    sourceId?: string;
    startTime?: number;
    stats?: Record<string, any>;
    status?: string;
    templateId?: string;
    type?: string;
    updatedAt?: number;
}
