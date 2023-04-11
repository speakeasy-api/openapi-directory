import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmUserStorageIdSyncRequest extends SpeakeasyBase {
    action?: string;
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmUserStorageIdSyncResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    synchronizationResult?: shared.SynchronizationResult;
}
