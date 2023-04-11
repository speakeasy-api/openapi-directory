import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * <p>Mode to determine whether to include other Payor's data in the results.</p>
 *
 * @remarks
 * <p>May only be used if payorId is specified.</p>
 * <p>Can be omitted or set to 'payorOnly' or 'payorAndDescendants'.</p>
 * <p>payorOnly: Only include results for the specified Payor. This is the default if 'include' is omitted.</p>
 * <p>payorAndDescendants: Aggregate results for all descendant Payors of the specified Payor. Should only be used if the Payor with the specified payorId has at least one child Payor.</p>
 * <p>Note when a Payor requests the report and include=payorAndDescendants is used, the following additional columns are included in the CSV: Payor Name, Payor Id</p>
 *
 */
export declare enum ExportTransactionsCsvv4IncludeEnum {
    PayorOnly = "payorOnly",
    PayorAndDescendants = "payorAndDescendants"
}
export declare class ExportTransactionsCsvv4Request extends SpeakeasyBase {
    /**
     * End date, inclusive. Format is YYYY-MM-DD
     */
    endDate?: Date;
    /**
     * <p>Mode to determine whether to include other Payor's data in the results.</p>
     *
     * @remarks
     * <p>May only be used if payorId is specified.</p>
     * <p>Can be omitted or set to 'payorOnly' or 'payorAndDescendants'.</p>
     * <p>payorOnly: Only include results for the specified Payor. This is the default if 'include' is omitted.</p>
     * <p>payorAndDescendants: Aggregate results for all descendant Payors of the specified Payor. Should only be used if the Payor with the specified payorId has at least one child Payor.</p>
     * <p>Note when a Payor requests the report and include=payorAndDescendants is used, the following additional columns are included in the CSV: Payor Name, Payor Id</p>
     *
     */
    include?: ExportTransactionsCsvv4IncludeEnum;
    /**
     * <p>The Payor ID for whom you wish to run the report.</p>
     *
     * @remarks
     * <p>For a Payor requesting the report, this could be their exact Payor, or it could be a child/descendant Payor.</p>
     *
     */
    payorId?: string;
    /**
     * Start date, inclusive. Format is YYYY-MM-DD
     */
    startDate?: Date;
}
export declare class ExportTransactionsCsvv4Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
