import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Type of this registration (per meter, per user, ...)
 */
export declare enum RegisterRealtimeApiDataRegistrationTypeEnum {
    Disabled = "Disabled",
    SingleMeterRegistration = "SingleMeterRegistration",
    UserRegistration = "UserRegistration"
}
/**
 * Container class for the register realtime API API
 */
export declare class RegisterRealtimeApiData extends SpeakeasyBase {
    /**
     * The URL of your endpoint. To this endpoint all the values are send to.
     */
    apiUrl?: string;
    /**
     * The Password (basic auth) of your endpoint. Leave empty of none.
     */
    basicAuthPassword?: string;
    /**
     * The Username (basic auth) of your endpoint. Leave empty of none.
     */
    basicAuthUsername?: string;
    /**
     * The ID of the registration
     */
    id?: string;
    /**
     * The ID of the Meter. Just used if the RegistrationType is "SingleMeterRegistration".
     */
    meterId?: string;
    /**
     * The Type of this registration (per meter, per user, ...)
     */
    registrationType?: RegisterRealtimeApiDataRegistrationTypeEnum;
    /**
     * The serial number of the Meter. Just used if the RegistrationType is "SingleMeterRegistration" and the MeterId is null.
     *
     * @remarks
     *             Example: 1 SME 01 63000000 or 6300000
     */
    serialNumber?: string;
}
