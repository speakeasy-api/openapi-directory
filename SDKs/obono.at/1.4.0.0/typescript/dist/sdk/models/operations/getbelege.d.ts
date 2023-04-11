import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Determines the format of the `Beleg` collection.
 */
export declare enum GetBelegeFormatEnum {
    Export = "export",
    Beleg = "beleg",
    Uuidlist = "uuidlist"
}
/**
 * Determines the sorting order.
 */
export declare enum GetBelegeOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetBelegeRequest extends SpeakeasyBase {
    /**
     * Only return results that where saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).
     */
    after?: string;
    /**
     * Only return results that where saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).
     */
    before?: string;
    /**
     * Determines the format of the `Beleg` collection.
     */
    format: GetBelegeFormatEnum;
    /**
     * Only return results that have at least a particular `Belegnummer`.
     */
    gte?: number;
    /**
     * Limits the number of returned results.
     */
    limit?: number;
    /**
     * Only return results that have at most a particular `Belegnummer`.
     */
    lte?: number;
    /**
     * Skips the specified number of results from the result set.
     */
    offset?: number;
    /**
     * Determines the sorting order.
     */
    order?: GetBelegeOrderEnum;
    /**
     * The `_uuid` of the `Registrierkasse` to retrieve the `Beleg` collection.
     */
    registrierkasseUuid: string;
}
export declare class GetBelegeResponse extends SpeakeasyBase {
    /**
     * The `Beleg` collection from the "Datenerfassungsprotokoll".
     */
    belege?: shared.Belege;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
