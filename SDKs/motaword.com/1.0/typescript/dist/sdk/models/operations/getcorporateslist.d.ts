import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCorporatesListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Corporate account list
     */
    corporateAccounts?: shared.CorporateAccount[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
