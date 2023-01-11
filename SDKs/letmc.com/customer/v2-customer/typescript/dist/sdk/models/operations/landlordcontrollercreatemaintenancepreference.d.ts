import { SpeakeasyBase } from "../../../internal/utils";
export declare class LandlordControllerCreateMaintenancePreferencePathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerCreateMaintenancePreferenceQueryParams extends SpeakeasyBase {
    name: string;
    notes: string;
    tenancyID: string;
    token: string;
}
export declare class LandlordControllerCreateMaintenancePreferenceRequest extends SpeakeasyBase {
    pathParams: LandlordControllerCreateMaintenancePreferencePathParams;
    queryParams: LandlordControllerCreateMaintenancePreferenceQueryParams;
}
export declare class LandlordControllerCreateMaintenancePreferenceResponse extends SpeakeasyBase {
    contentType: string;
    landlordControllerCreateMaintenancePreference200ApplicationJSONString?: string;
    landlordControllerCreateMaintenancePreference200ApplicationXMLString?: string;
    landlordControllerCreateMaintenancePreference200TextJSONString?: string;
    landlordControllerCreateMaintenancePreference200TextXMLString?: string;
    statusCode: number;
}
