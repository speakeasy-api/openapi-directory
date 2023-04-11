import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostRealmUserStorageIdRemoveImportedUsersRequest extends SpeakeasyBase {
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmUserStorageIdRemoveImportedUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
