import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmRolesByIdRoleIdRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
    /**
     * id of role
     */
    roleId: string;
}
export declare class DeleteRealmRolesByIdRoleIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
