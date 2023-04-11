import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmUserStorageParentIdMappersIdSyncRequest extends SpeakeasyBase {
    direction?: string;
    id: string;
    parentId: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmUserStorageParentIdMappersIdSyncResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    synchronizationResult?: shared.SynchronizationResult;
}
