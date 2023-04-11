import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchAppAction } from "./launchappaction";
import { UserFacingMessage } from "./userfacingmessage";
/**
 * An action executed during setup.
 */
export declare class SetupAction extends SpeakeasyBase {
    /**
     * Provides a user-facing message with locale info. The maximum message length is 4096 characters.
     */
    description?: UserFacingMessage;
    /**
     * An action to launch an app.
     */
    launchApp?: LaunchAppAction;
    /**
     * Provides a user-facing message with locale info. The maximum message length is 4096 characters.
     */
    title?: UserFacingMessage;
}
