import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GymGetRequest extends SpeakeasyBase {
    /**
     * indentity number (primary key) for gym object
     */
    gymID: number;
}
export declare class GymGetResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    /**
     * API Response with Gym entity
     */
    defaultResponseDTOOfGymDTO?: shared.DefaultResponseDTOOfGymDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
