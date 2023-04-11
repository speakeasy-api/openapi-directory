import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Either 'renew' or 'addDevices'. 'addDevices' will increase the license limit, while 'renew' will extend the amount of time until expiration. Defaults to 'addDevices'. All licenses must be claimed with the same mode, and at most one renewal can be claimed at a time. This parameter is legacy and does not apply to organizations with per-device licensing enabled.
 */
export declare enum ClaimIntoOrganizationRequestBodyLicensesModeEnum {
    AddDevices = "addDevices",
    Renew = "renew"
}
export declare class ClaimIntoOrganizationRequestBodyLicenses extends SpeakeasyBase {
    /**
     * The key of the license
     */
    key: string;
    /**
     * Either 'renew' or 'addDevices'. 'addDevices' will increase the license limit, while 'renew' will extend the amount of time until expiration. Defaults to 'addDevices'. All licenses must be claimed with the same mode, and at most one renewal can be claimed at a time. This parameter is legacy and does not apply to organizations with per-device licensing enabled.
     */
    mode?: ClaimIntoOrganizationRequestBodyLicensesModeEnum;
}
export declare class ClaimIntoOrganizationRequestBody extends SpeakeasyBase {
    /**
     * The licenses that should be claimed
     */
    licenses?: ClaimIntoOrganizationRequestBodyLicenses[];
    /**
     * The numbers of the orders that should be claimed
     */
    orders?: string[];
    /**
     * The serials of the devices that should be claimed
     */
    serials?: string[];
}
export declare class ClaimIntoOrganizationRequest extends SpeakeasyBase {
    requestBody?: ClaimIntoOrganizationRequestBody;
    organizationId: string;
}
export declare class ClaimIntoOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    claimIntoOrganization200ApplicationJSONObject?: Record<string, any>;
}
