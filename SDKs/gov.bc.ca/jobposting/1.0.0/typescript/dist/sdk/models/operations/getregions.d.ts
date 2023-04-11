import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRegionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unexpected error
     */
    error?: shared.ErrorT;
    /**
     * An array of regions
     */
    regions?: shared.Region[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
