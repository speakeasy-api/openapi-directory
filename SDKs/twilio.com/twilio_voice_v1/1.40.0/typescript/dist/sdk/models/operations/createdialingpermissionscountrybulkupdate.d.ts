import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateDialingPermissionsCountryBulkUpdateServerList: readonly ["https://voice.twilio.com"];
export declare class CreateDialingPermissionsCountryBulkUpdateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest extends SpeakeasyBase {
    /**
     * URL encoded JSON array of update objects. example : `[ { "iso_code": "GB", "low_risk_numbers_enabled": "true", "high_risk_special_numbers_enabled":"true", "high_risk_tollfraud_numbers_enabled": "false" } ]`
     */
    updateRequest: string;
}
export declare class CreateDialingPermissionsCountryBulkUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate?: shared.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate;
}
