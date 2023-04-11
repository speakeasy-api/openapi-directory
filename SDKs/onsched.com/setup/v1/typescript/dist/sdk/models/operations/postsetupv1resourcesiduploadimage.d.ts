import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1ResourcesIdUploadimageRequest extends SpeakeasyBase {
    /**
     * Input model for image upload
     */
    resourceImageInputModel?: shared.ResourceImageInputModel;
    /**
     * id of resource object
     */
    id: string;
}
export declare class PostSetupV1ResourcesIdUploadimageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
