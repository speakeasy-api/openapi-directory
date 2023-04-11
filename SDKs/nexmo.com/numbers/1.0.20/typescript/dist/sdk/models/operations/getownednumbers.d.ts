import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOwnedNumbersRequest extends SpeakeasyBase {
    /**
     * The Application that you want to return the numbers for.
     */
    applicationId?: string;
    country?: string;
    /**
     * Set this optional field to `true` to restrict your results to numbers
     *
     * @remarks
     * associated with an Application (any Application). Set to `false` to
     * find all numbers not associated with any Application. Omit the field
     * to avoid filtering on whether or not the number is assigned to an
     * Application.
     *
     */
    hasApplication?: boolean;
    /**
     * Page index
     */
    index?: number;
    /**
     * The number pattern you want to search for. Use in conjunction with `search_pattern`.
     */
    pattern?: string;
    /**
     * The strategy you want to use for matching:
     *
     * @remarks
     *
     *
     * * `0` - Search for numbers that start with `pattern` (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA)
     * * `1` - Search for numbers that contain `pattern`
     * * `2` - Search for numbers that end with `pattern`
     *
     */
    searchPattern?: shared.SearchPatternEnum;
    /**
     * Page size
     */
    size?: number;
}
export declare class GetOwnedNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    accountUnauthorized?: shared.AccountUnauthorized;
    /**
     * OK
     */
    inboundNumbers?: shared.InboundNumbers;
}
