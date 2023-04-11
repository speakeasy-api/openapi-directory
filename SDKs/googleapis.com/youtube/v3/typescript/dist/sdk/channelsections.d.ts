import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelSections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a resource.
     */
    youtubeChannelSectionsDelete(req: operations.YoutubeChannelSectionsDeleteRequest, security: operations.YoutubeChannelSectionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeChannelSectionsDeleteResponse>;
    /**
     * Inserts a new resource into this collection.
     */
    youtubeChannelSectionsInsert(req: operations.YoutubeChannelSectionsInsertRequest, security: operations.YoutubeChannelSectionsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeChannelSectionsInsertResponse>;
    /**
     * Retrieves a list of resources, possibly filtered.
     */
    youtubeChannelSectionsList(req: operations.YoutubeChannelSectionsListRequest, security: operations.YoutubeChannelSectionsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeChannelSectionsListResponse>;
    /**
     * Updates an existing resource.
     */
    youtubeChannelSectionsUpdate(req: operations.YoutubeChannelSectionsUpdateRequest, security: operations.YoutubeChannelSectionsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeChannelSectionsUpdateResponse>;
}
