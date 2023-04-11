import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountsRequest extends SpeakeasyBase {
    /**
     * The type of account for which to return records. This
     *
     * @remarks
     * can be used to filter Savers from spending accounts.
     *
     */
    filterAccountType?: shared.AccountTypeEnumEnum;
    /**
     * The account ownership structure for which to return
     *
     * @remarks
     * records. This can be used to filter 2Up accounts from Up
     * accounts.
     *
     */
    filterOwnershipType?: shared.OwnershipTypeEnumEnum;
    /**
     * The number of records to return in each page.
     *
     * @remarks
     *
     */
    pageSize?: number;
}
export declare class GetAccountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    listAccountsResponse?: shared.ListAccountsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
