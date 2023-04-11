import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppdistroV1Tester } from "./googlefirebaseappdistrov1tester";
/**
 * The Response message for `BatchAddTesters`.
 */
export declare class GoogleFirebaseAppdistroV1BatchAddTestersResponse extends SpeakeasyBase {
    /**
     * The testers which are created and/or already exist
     */
    testers?: GoogleFirebaseAppdistroV1Tester[];
}
