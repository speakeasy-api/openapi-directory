import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Source info
 */
export declare class Source extends SpeakeasyBase {
    archivedAt?: Date;
    availabilityMessage?: string;
    availabilityStatus?: string;
    cloudConnectorId?: string;
    createdAt?: Date;
    enabled?: boolean;
    /**
     * ID of the resource
     */
    id?: string;
    info?: Record<string, any>;
    lastAvailableAt?: Date;
    lastCheckedAt?: Date;
    lastRefreshMessage?: string;
    lastSuccessfulRefreshAt?: Date;
    name?: string;
    previousSha?: string;
    previousSize?: number;
    refreshFinishedAt?: Date;
    refreshStartedAt?: Date;
    refreshState?: string;
    refreshTaskId?: string;
    uid?: string;
    updatedAt?: Date;
}
