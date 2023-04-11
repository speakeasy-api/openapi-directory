import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1LocationsIdServicesRequest extends SpeakeasyBase {
    /**
     * array of valid service object id's
     */
    requestBody?: string[];
    /**
     * id of business location, defaults to primary business location
     */
    id: string;
}
export declare class PostSetupV1LocationsIdServicesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
