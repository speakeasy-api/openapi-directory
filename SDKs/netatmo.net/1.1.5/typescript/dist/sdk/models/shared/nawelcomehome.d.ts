import { SpeakeasyBase } from "../../../internal/utils";
import { NAWelcomeCamera } from "./nawelcomecamera";
import { NAWelcomeEvent } from "./nawelcomeevent";
import { NAWelcomeModule } from "./nawelcomemodule";
import { NAWelcomePerson } from "./nawelcomeperson";
import { NAWelcomePlace } from "./nawelcomeplace";
export declare class NAWelcomeHome extends SpeakeasyBase {
    cameras?: NAWelcomeCamera[];
    events?: NAWelcomeEvent[];
    /**
     * Id of the home.
     */
    id?: string;
    modules?: NAWelcomeModule[];
    /**
     * Name of the home
     */
    name?: string;
    persons?: NAWelcomePerson[];
    place?: NAWelcomePlace;
}
