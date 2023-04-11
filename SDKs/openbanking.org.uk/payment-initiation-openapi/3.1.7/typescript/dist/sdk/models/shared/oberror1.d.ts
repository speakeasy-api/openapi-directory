import { SpeakeasyBase } from "../../../internal/utils";
export declare class OBError1 extends SpeakeasyBase {
    /**
     * Low level textual error code, e.g., UK.OBIE.Field.Missing
     */
    errorCode: string;
    /**
     * A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'
     *
     * @remarks
     * OBIE doesn't standardise this field
     */
    message: string;
    /**
     * Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency
     */
    path?: string;
    /**
     * URL to help remediate the problem, or provide more information, or to API Reference, or help etc
     */
    url?: string;
}
