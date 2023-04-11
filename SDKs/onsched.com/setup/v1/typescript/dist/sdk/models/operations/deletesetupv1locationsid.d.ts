import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1LocationsIdRequest extends SpeakeasyBase {
    /**
     * id of business location, defaults to primary business location
     */
    id: string;
}
export declare class DeleteSetupV1LocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
