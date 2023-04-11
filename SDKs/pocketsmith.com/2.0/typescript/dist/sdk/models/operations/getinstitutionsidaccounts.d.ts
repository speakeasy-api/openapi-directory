import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetInstitutionsIdAccountsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the institution.
     */
    id: number;
}
export declare class GetInstitutionsIdAccountsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    accounts?: shared.Account[];
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
