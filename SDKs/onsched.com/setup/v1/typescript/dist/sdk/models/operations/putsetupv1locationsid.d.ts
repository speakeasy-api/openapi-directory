import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1LocationsIdRequest extends SpeakeasyBase {
    locationUpdateModel?: shared.LocationUpdateModel;
    id: string;
    removeRegion?: boolean;
}
export declare class PutSetupV1LocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
