import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1LocationsIdRecoverRequest extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1LocationsIdRecoverResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
