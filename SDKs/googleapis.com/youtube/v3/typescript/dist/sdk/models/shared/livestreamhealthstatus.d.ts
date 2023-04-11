import { SpeakeasyBase } from "../../../internal/utils";
import { LiveStreamConfigurationIssue } from "./livestreamconfigurationissue";
/**
 * The status code of this stream
 */
export declare enum LiveStreamHealthStatusStatusEnum {
    Good = "good",
    Ok = "ok",
    Bad = "bad",
    NoData = "noData",
    Revoked = "revoked"
}
export declare class LiveStreamHealthStatus extends SpeakeasyBase {
    /**
     * The configurations issues on this stream
     */
    configurationIssues?: LiveStreamConfigurationIssue[];
    /**
     * The last time this status was updated (in seconds)
     */
    lastUpdateTimeSeconds?: string;
    /**
     * The status code of this stream
     */
    status?: LiveStreamHealthStatusStatusEnum;
}
