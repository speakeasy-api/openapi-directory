import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1ServicesIdUploadimageRequest extends SpeakeasyBase {
    /**
     * Input model for image upload
     */
    serviceImageInputModel?: shared.ServiceImageInputModel;
    /**
     * id of service object
     */
    id: string;
}
export declare class PostSetupV1ServicesIdUploadimageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    serviceViewModel?: shared.ServiceViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
