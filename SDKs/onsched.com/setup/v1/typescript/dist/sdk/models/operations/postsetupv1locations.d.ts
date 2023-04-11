import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1LocationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
