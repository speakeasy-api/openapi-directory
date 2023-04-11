import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCorporateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Corporate account details
     */
    corporateAccount?: shared.CorporateAccount;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
