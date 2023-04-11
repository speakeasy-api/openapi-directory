import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSitesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * array of sites
     */
    sites?: shared.Site[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
