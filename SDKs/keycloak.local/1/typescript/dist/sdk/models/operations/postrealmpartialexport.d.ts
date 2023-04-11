import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmPartialExportRequest extends SpeakeasyBase {
    exportClients?: boolean;
    exportGroupsAndRoles?: boolean;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmPartialExportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * success
     */
    realmRepresentation?: shared.RealmRepresentation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
