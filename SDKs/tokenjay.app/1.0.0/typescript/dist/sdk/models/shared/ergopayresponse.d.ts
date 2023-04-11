import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ErgoPayResponseMessageSeverityEnum {
    None = "NONE",
    Information = "INFORMATION",
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * OK
 */
export declare class ErgoPayResponse extends SpeakeasyBase {
    address?: string;
    addresses?: string[];
    message?: string;
    messageSeverity?: ErgoPayResponseMessageSeverityEnum;
    reducedTx?: string;
    reducedTxList?: string[];
    replyTo?: string;
}
