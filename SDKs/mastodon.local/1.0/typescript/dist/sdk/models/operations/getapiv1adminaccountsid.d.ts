import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1AdminAccountsIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1AdminAccountsIdRequest extends SpeakeasyBase {
    /**
     * ID of the account
     */
    id: string;
}
export declare class GetApiV1AdminAccountsIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    adminAccount?: shared.AdminAccount;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
