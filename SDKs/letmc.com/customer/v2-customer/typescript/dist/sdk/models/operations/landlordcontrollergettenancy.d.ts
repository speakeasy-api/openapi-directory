import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LandlordControllerGetTenancyRequest extends SpeakeasyBase {
    /**
     * The unique client short-name
     */
    shortName: string;
    /**
     * The Tenancy ID
     */
    tenancyID: string;
    /**
     * The login token returned from the /session POST call
     */
    token: string;
}
export declare class LandlordControllerGetTenancyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    landlordTenancyModel?: shared.LandlordTenancyModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
