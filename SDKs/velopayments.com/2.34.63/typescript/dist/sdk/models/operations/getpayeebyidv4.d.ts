import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetPayeeByIdV4Request extends SpeakeasyBase {
    /**
     * The UUID of the payee.
     */
    payeeId: string;
    /**
     * Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.
     *
     * @remarks
     * If set to true, and you have permission, the PII values will be returned as their original unmasked values.
     *
     */
    sensitive?: boolean;
}
export declare class GetPayeeByIdV4Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Success response, request completed okay
     */
    payeeDetailResponseV4?: shared.PayeeDetailResponseV4;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
