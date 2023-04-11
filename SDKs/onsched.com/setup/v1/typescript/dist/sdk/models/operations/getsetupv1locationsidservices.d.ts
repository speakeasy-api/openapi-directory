import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1LocationsIdServicesRequest extends SpeakeasyBase {
    /**
     * id of business location, defaults to primary business location
     */
    id: string;
    /**
     * Page limit default 20, max 100
     */
    limit?: number;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
}
export declare class GetSetupV1LocationsIdServicesResponse extends SpeakeasyBase {
    /**
     * location service objects
     */
    businessServiceListViewModel?: shared.BusinessServiceListViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
