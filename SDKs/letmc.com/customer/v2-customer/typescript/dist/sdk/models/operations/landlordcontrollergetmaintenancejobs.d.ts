import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LandlordControllerGetMaintenanceJobsRequest extends SpeakeasyBase {
    /**
     * The unique client short-name
     */
    shortName: string;
    /**
     * The login token returned from the /session POST call
     */
    token: string;
}
export declare class LandlordControllerGetMaintenanceJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    landlordMaintenanceModel?: shared.LandlordMaintenanceModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
