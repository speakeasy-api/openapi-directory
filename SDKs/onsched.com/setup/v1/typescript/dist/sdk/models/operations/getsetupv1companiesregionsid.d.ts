import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1CompaniesRegionsIdRequest extends SpeakeasyBase {
    /**
     * id of a region object
     */
    id: string;
}
export declare class GetSetupV1CompaniesRegionsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    regionViewModel?: shared.RegionViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
