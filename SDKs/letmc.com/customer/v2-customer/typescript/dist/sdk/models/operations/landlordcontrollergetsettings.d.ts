import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LandlordControllerGetSettingsRequest extends SpeakeasyBase {
    /**
     * The unique client short-name
     */
    shortName: string;
    /**
     * The login token returned from the /session POST call
     */
    token: string;
}
export declare class LandlordControllerGetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    landlordSettingsModel?: shared.LandlordSettingsModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
