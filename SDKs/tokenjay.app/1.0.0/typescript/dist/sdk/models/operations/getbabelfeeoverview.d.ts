import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBabelFeeOverviewResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    getBabelFeeOverview400WildcardString?: string;
    /**
     * Unauthorized
     */
    getBabelFeeOverview401WildcardString?: string;
    /**
     * Not Found
     */
    getBabelFeeOverview404WildcardString?: string;
    /**
     * Conflict
     */
    getBabelFeeOverview409WildcardString?: string;
}
