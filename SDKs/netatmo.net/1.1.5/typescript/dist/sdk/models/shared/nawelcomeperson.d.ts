import { SpeakeasyBase } from "../../../internal/utils";
import { NAWelcomeFace } from "./nawelcomeface";
export declare class NAWelcomePerson extends SpeakeasyBase {
    face?: NAWelcomeFace;
    /**
     * Id of the person.
     */
    id?: string;
    /**
     * Time at which the person was last seen.
     */
    lastSeen?: number;
    /**
     * True if the Person is out of sight.
     */
    outOfSight?: boolean;
    /**
     * Name of the person, if pseudo is missing, person is unknown.
     */
    pseudo?: string;
}
