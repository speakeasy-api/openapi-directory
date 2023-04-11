import { SpeakeasyBase } from "../../../internal/utils";
/**
 * import task
 */
export declare class Task extends SpeakeasyBase {
    agentId?: string;
    clientId?: string;
    createdAt?: number;
    createdBy?: string;
    createdByUserId?: string;
    cruncherId?: string;
    description?: string;
    error?: string;
    hidden?: boolean;
    id: string;
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
    startTime?: number;
    stats?: Record<string, any>;
    status?: string;
    templateId?: string;
    type?: string;
    updatedAt?: number;
}
