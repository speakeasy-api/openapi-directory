import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LandlordControllerGetRentArrearsRequest extends SpeakeasyBase {
    /**
     * The unique client short-name
     */
    shortName: string;
    /**
     * The login token returned from the /session POST call
     */
    token: string;
}
export declare class LandlordControllerGetRentArrearsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    landlordRentArrearsModel?: shared.LandlordRentArrearsModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
