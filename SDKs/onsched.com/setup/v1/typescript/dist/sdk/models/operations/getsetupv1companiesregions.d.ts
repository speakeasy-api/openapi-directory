import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1CompaniesRegionsRequest extends SpeakeasyBase {
    /**
     * Page limit default 20, max 100
     */
    limit?: number;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
}
export declare class GetSetupV1CompaniesRegionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * region object's
     */
    regionListViewModel?: shared.RegionListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
