import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of countries and regions.
     */
    regionOut?: shared.RegionOut;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
