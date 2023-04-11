import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFacilityIdsSecurity extends SpeakeasyBase {
    apikey: string;
}
/**
 * Optional facility type search filter
 */
export declare enum GetFacilityIdsTypeEnum {
    Health = "health",
    Cemetery = "cemetery",
    Benefits = "benefits",
    VetCenter = "vet_center"
}
export declare class GetFacilityIdsRequest extends SpeakeasyBase {
    /**
     * Optional facility type search filter
     */
    type?: GetFacilityIdsTypeEnum;
}
export declare class GetFacilityIdsResponse extends SpeakeasyBase {
    /**
     * Requested format unacceptable
     */
    apiError?: shared.ApiError;
    contentType: string;
    /**
     * Success
     */
    facilitiesIdsResponse?: shared.FacilitiesIdsResponse;
    /**
     * Missing API token
     */
    genericError?: shared.GenericError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
