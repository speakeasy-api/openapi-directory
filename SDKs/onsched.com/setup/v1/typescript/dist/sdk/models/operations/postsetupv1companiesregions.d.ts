import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1CompaniesRegionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    regionViewModel?: shared.RegionViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
