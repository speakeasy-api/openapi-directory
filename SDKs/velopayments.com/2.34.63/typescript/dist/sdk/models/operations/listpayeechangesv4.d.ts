import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListPayeeChangesV4Request extends SpeakeasyBase {
    /**
     * Page number. Default is 1.
     */
    page?: number;
    /**
     * Page size. Default is 100. Max allowable is 1000.
     */
    pageSize?: number;
    /**
     * The Payor ID to find associated Payees
     */
    payorId: string;
    /**
     * The updatedSince filter in the format YYYY-MM-DDThh:mm:ss+hh:mm
     */
    updatedSince: Date;
}
export declare class ListPayeeChangesV4Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Details of Payee Changes
     */
    payeeDeltaResponseV4?: shared.PayeeDeltaResponseV4;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
