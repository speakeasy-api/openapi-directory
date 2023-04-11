import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1CompaniesRegionsIdRequest extends SpeakeasyBase {
    /**
     * Region Update Model
     */
    regionUpdateModel?: shared.RegionUpdateModel;
    /**
     * id of Region
     */
    id: string;
}
export declare class PutSetupV1CompaniesRegionsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    regionViewModel?: shared.RegionViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
