import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveNearEarthObjectByIdRequest extends SpeakeasyBase {
    /**
     * ID of Near Earth Object - (ex: 3729835)
     */
    asteroidId: string;
}
export declare class RetrieveNearEarthObjectByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    nearEarthObject?: shared.NearEarthObject;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
