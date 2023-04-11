import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class User extends SpeakeasyBase {
    administrator?: boolean;
    attributes?: Record<string, any>;
    coordinateFormat?: string;
    deviceLimit?: number;
    deviceReadonly?: boolean;
    disabled?: boolean;
    email?: string;
    /**
     * in IS0 8601 format. eg. `1963-11-22T18:30:00Z`
     */
    expirationTime?: Date;
    id?: number;
    latitude?: number;
    limitCommands?: boolean;
    longitude?: number;
    map?: string;
    name?: string;
    password?: string;
    phone?: string;
    poiLayer?: string;
    readonly?: boolean;
    twelveHourFormat?: boolean;
    userLimit?: number;
    zoom?: number;
}
