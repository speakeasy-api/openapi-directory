import { SpeakeasyBase } from "../../../internal/utils";
import { PersonalApplicationPolicy } from "./personalapplicationpolicy";
/**
 * Used together with personalApplications to control how apps in the personal profile are allowed or blocked.
 */
export declare enum PersonalUsagePoliciesPersonalPlayStoreModeEnum {
    PlayStoreModeUnspecified = "PLAY_STORE_MODE_UNSPECIFIED",
    Blacklist = "BLACKLIST",
    Blocklist = "BLOCKLIST",
    Allowlist = "ALLOWLIST"
}
/**
 * Policies controlling personal usage on a company-owned device with a work profile.
 */
export declare class PersonalUsagePolicies extends SpeakeasyBase {
    /**
     * Account types that can't be managed by the user.
     */
    accountTypesWithManagementDisabled?: string[];
    /**
     * If true, the camera is disabled on the personal profile.
     */
    cameraDisabled?: boolean;
    /**
     * Controls how long the work profile can stay off. The duration must be at least 3 days.
     */
    maxDaysWithWorkOff?: number;
    /**
     * Policy applied to applications in the personal profile.
     */
    personalApplications?: PersonalApplicationPolicy[];
    /**
     * Used together with personalApplications to control how apps in the personal profile are allowed or blocked.
     */
    personalPlayStoreMode?: PersonalUsagePoliciesPersonalPlayStoreModeEnum;
    /**
     * If true, screen capture is disabled for all users.
     */
    screenCaptureDisabled?: boolean;
}
