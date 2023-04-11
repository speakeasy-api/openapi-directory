import { SpeakeasyBase } from "../../../internal/utils";
import { NADate } from "./nadate";
import { NAUserAdministrative } from "./nauseradministrative";
export declare class NAUser extends SpeakeasyBase {
    id?: string;
    administrative?: NAUserAdministrative;
    dateCreation?: NADate;
    /**
     * An array of string containing the ids of the devices owned by the user
     */
    devices?: string[];
    /**
     * An array of string containing the ids of the devices on which the user has a "guest" access
     *
     * @remarks
     *
     */
    friendDevices?: string[];
    mail?: string;
    timelineNotRead?: number;
    timelineSize?: number;
}
