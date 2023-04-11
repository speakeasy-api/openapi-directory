import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFleetFleetnameRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * The identifier or email address of the fleet; it is integrated in the `sub` property and is the basis of the other generated properties.
     *
     */
    fleetname: string;
}
/**
 * OK
 */
export declare class GetFleetFleetname200ApplicationJSON extends SpeakeasyBase {
    /**
     * URL of the Fleet's JSON representation.
     */
    atId?: string;
    /**
     * The URL of the fleet logo, which can be customized by the gravatar associated with the email address in the `logo_email` property.
     */
    logo?: string;
    /**
     * The email address of the fleet, either generated or provided in the `sub` property. The fleet logo can be customized by the use of the gravater associated with this email address.
     */
    logoEmail?: string;
    /**
     * The client objects included in a fleet.
     */
    members?: any[];
    /**
     * The displayed fleet name.
     */
    name?: string;
    /**
     * The URL of the Fleet profile.
     */
    profile?: string;
    /**
     * The name or email address of a given fleet. The fleet properties and fleet members are generated from this name. If provide an email address, you can customize the fleet logo by the use of the gravatar associated with the email address.
     */
    sub: string;
}
export declare class GetFleetFleetnameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getFleetFleetname200ApplicationJSONObject?: GetFleetFleetname200ApplicationJSON;
}
