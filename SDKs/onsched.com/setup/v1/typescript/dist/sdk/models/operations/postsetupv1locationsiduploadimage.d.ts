import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1LocationsIdUploadimageRequest extends SpeakeasyBase {
    /**
     * Input model for image upload
     */
    resourceImageInputModel?: shared.ResourceImageInputModel;
    /**
     * id of business location, defaults to primary business location
     */
    id: string;
}
export declare class PostSetupV1LocationsIdUploadimageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
