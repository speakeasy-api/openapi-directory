import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LandlordControllerCreateMaintenancePreferenceRequest extends SpeakeasyBase {
    /**
     * Name of the maintenance preference to add
     */
    name: string;
    /**
     * Notes of the maintenance preference to add
     */
    notes: string;
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
export declare class LandlordControllerCreateMaintenancePreferenceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    landlordControllerCreateMaintenancePreference200ApplicationJSONString?: string;
    /**
     * OK
     */
    landlordControllerCreateMaintenancePreference200ApplicationXMLString?: string;
    /**
     * OK
     */
    landlordControllerCreateMaintenancePreference200TextJSONString?: string;
    /**
     * OK
     */
    landlordControllerCreateMaintenancePreference200TextXMLString?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
