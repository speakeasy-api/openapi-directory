import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseAppdistroV1ReleaseNotes } from "./googlefirebaseappdistrov1releasenotes";
/**
 * A release of a Firebase app.
 */
export declare class GoogleFirebaseAppdistroV1Release extends SpeakeasyBase {
    /**
     * Output only. A signed link (which expires in one hour) to directly download the app binary (IPA/APK/AAB) file.
     */
    binaryDownloadUri?: string;
    /**
     * Output only. Build version of the release. For an Android release, the build version is the `versionCode`. For an iOS release, the build version is the `CFBundleVersion`.
     */
    buildVersion?: string;
    /**
     * Output only. The time the release was created.
     */
    createTime?: string;
    /**
     * Output only. Display version of the release. For an Android release, the display version is the `versionName`. For an iOS release, the display version is the `CFBundleShortVersionString`.
     */
    displayVersion?: string;
    /**
     * Output only. A link to the Firebase console displaying a single release.
     */
    firebaseConsoleUri?: string;
    /**
     * The name of the release resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}`
     */
    name?: string;
    /**
     * Notes that belong to a release.
     */
    releaseNotes?: GoogleFirebaseAppdistroV1ReleaseNotes;
    /**
     * Output only. A link to the release in the tester web clip or Android app that lets testers (which were granted access to the app) view release notes and install the app onto their devices.
     */
    testingUri?: string;
}
