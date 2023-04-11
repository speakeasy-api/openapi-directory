import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1CompaniesRegionsIdRequest extends SpeakeasyBase {
    /**
     * id of Region
     */
    id: string;
}
export declare class DeleteSetupV1CompaniesRegionsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    regionViewModel?: shared.RegionViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
