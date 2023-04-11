import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCorporateByIdRequest extends SpeakeasyBase {
    /**
     * Corporate ID
     */
    corporateId: number;
}
export declare class GetCorporateByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Corporate account details
     */
    corporateAccount?: shared.CorporateAccount;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
