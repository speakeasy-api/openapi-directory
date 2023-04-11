import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
export declare class OBError1 extends SpeakeasyBase {
    /**
     * This is Data Type gives a low level textual error code to help categorise an error response. The applicable HTTP response code is also given.
     */
    errorCode: ErrorCodeEnum;
    /**
     * A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'OBIE doesn't standardise this field
     */
    message: string;
    /**
     * Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency
     */
    path?: string;
}
