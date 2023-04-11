import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposListCacheInfoRequest extends SpeakeasyBase {
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare enum ReposListCacheInfo200ApplicationJSONGitSyncStatusEnum {
    Offline = "offline",
    Inactive = "inactive",
    InSync = "in_sync",
    NotInSync = "not_in_sync"
}
export declare class ReposListCacheInfo200ApplicationJSONGit extends SpeakeasyBase {
    lastSync: Date;
    syncStatus: ReposListCacheInfo200ApplicationJSONGitSyncStatusEnum;
}
/**
 * Status for a cache replica
 */
export declare class ReposListCacheInfo200ApplicationJSON extends SpeakeasyBase {
    git: ReposListCacheInfo200ApplicationJSONGit;
    host: string;
    location: string;
}
export declare class ReposListCacheInfoResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Status information for cache replicas
     */
    reposListCacheInfo200ApplicationJSONObjects?: ReposListCacheInfo200ApplicationJSON[];
}
