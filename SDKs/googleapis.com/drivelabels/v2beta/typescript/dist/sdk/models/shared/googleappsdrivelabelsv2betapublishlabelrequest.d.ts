import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsDriveLabelsV2betaWriteControl } from "./googleappsdrivelabelsv2betawritecontrol";
/**
 * Request to publish a label.
 */
export declare class GoogleAppsDriveLabelsV2betaPublishLabelRequest extends SpeakeasyBase {
    /**
     * The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used.
     */
    languageCode?: string;
    /**
     * Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
     */
    useAdminAccess?: boolean;
    /**
     * Provides control over how write requests are executed. When not specified, the last write wins.
     */
    writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
}
