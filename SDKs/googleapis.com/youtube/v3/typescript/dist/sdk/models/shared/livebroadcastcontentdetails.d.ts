import { SpeakeasyBase } from "../../../internal/utils";
import { MonitorStreamInfo } from "./monitorstreaminfo";
export declare enum LiveBroadcastContentDetailsClosedCaptionsTypeEnum {
    ClosedCaptionsTypeUnspecified = "closedCaptionsTypeUnspecified",
    ClosedCaptionsDisabled = "closedCaptionsDisabled",
    ClosedCaptionsHttpPost = "closedCaptionsHttpPost",
    ClosedCaptionsEmbedded = "closedCaptionsEmbedded"
}
/**
 * If both this and enable_low_latency are set, they must match. LATENCY_NORMAL should match enable_low_latency=false LATENCY_LOW should match enable_low_latency=true LATENCY_ULTRA_LOW should have enable_low_latency omitted.
 */
export declare enum LiveBroadcastContentDetailsLatencyPreferenceEnum {
    LatencyPreferenceUnspecified = "latencyPreferenceUnspecified",
    Normal = "normal",
    Low = "low",
    UltraLow = "ultraLow"
}
/**
 * The projection format of this broadcast. This defaults to rectangular.
 */
export declare enum LiveBroadcastContentDetailsProjectionEnum {
    ProjectionUnspecified = "projectionUnspecified",
    Rectangular = "rectangular",
    ThreeHundredAndSixty = "360",
    Mesh = "mesh"
}
/**
 * The 3D stereo layout of this broadcast. This defaults to mono.
 */
export declare enum LiveBroadcastContentDetailsStereoLayoutEnum {
    StereoLayoutUnspecified = "stereoLayoutUnspecified",
    Mono = "mono",
    LeftRight = "leftRight",
    TopBottom = "topBottom"
}
/**
 * Detailed settings of a broadcast.
 */
export declare class LiveBroadcastContentDetails extends SpeakeasyBase {
    /**
     * This value uniquely identifies the live stream bound to the broadcast.
     */
    boundStreamId?: string;
    /**
     * The date and time that the live stream referenced by boundStreamId was last updated.
     */
    boundStreamLastUpdateTimeMs?: Date;
    closedCaptionsType?: LiveBroadcastContentDetailsClosedCaptionsTypeEnum;
    /**
     * This setting indicates whether auto start is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events.
     */
    enableAutoStart?: boolean;
    /**
     * This setting indicates whether auto stop is enabled for this broadcast. The default value for this property is false. This setting can only be used by Events.
     */
    enableAutoStop?: boolean;
    /**
     * This setting indicates whether HTTP POST closed captioning is enabled for this broadcast. The ingestion URL of the closed captions is returned through the liveStreams API. This is mutually exclusive with using the closed_captions_type property, and is equivalent to setting closed_captions_type to CLOSED_CAPTIONS_HTTP_POST.
     */
    enableClosedCaptions?: boolean;
    /**
     * This setting indicates whether YouTube should enable content encryption for the broadcast.
     */
    enableContentEncryption?: boolean;
    /**
     * This setting determines whether viewers can access DVR controls while watching the video. DVR controls enable the viewer to control the video playback experience by pausing, rewinding, or fast forwarding content. The default value for this property is true. *Important:* You must set the value to true and also set the enableArchive property's value to true if you want to make playback available immediately after the broadcast ends.
     */
    enableDvr?: boolean;
    /**
     * This setting indicates whether the broadcast video can be played in an embedded player. If you choose to archive the video (using the enableArchive property), this setting will also apply to the archived video.
     */
    enableEmbed?: boolean;
    /**
     * Indicates whether this broadcast has low latency enabled.
     */
    enableLowLatency?: boolean;
    /**
     * If both this and enable_low_latency are set, they must match. LATENCY_NORMAL should match enable_low_latency=false LATENCY_LOW should match enable_low_latency=true LATENCY_ULTRA_LOW should have enable_low_latency omitted.
     */
    latencyPreference?: LiveBroadcastContentDetailsLatencyPreferenceEnum;
    /**
     * The mesh for projecting the video if projection is mesh. The mesh value must be a UTF-8 string containing the base-64 encoding of 3D mesh data that follows the Spherical Video V2 RFC specification for an mshp box, excluding the box size and type but including the following four reserved zero bytes for the version and flags.
     */
    mesh?: string;
    /**
     * Settings and Info of the monitor stream
     */
    monitorStream?: MonitorStreamInfo;
    /**
     * The projection format of this broadcast. This defaults to rectangular.
     */
    projection?: LiveBroadcastContentDetailsProjectionEnum;
    /**
     * Automatically start recording after the event goes live. The default value for this property is true. *Important:* You must also set the enableDvr property's value to true if you want the playback to be available immediately after the broadcast ends. If you set this property's value to true but do not also set the enableDvr property to true, there may be a delay of around one day before the archived video will be available for playback.
     */
    recordFromStart?: boolean;
    /**
     * This setting indicates whether the broadcast should automatically begin with an in-stream slate when you update the broadcast's status to live. After updating the status, you then need to send a liveCuepoints.insert request that sets the cuepoint's eventState to end to remove the in-stream slate and make your broadcast stream visible to viewers.
     */
    startWithSlate?: boolean;
    /**
     * The 3D stereo layout of this broadcast. This defaults to mono.
     */
    stereoLayout?: LiveBroadcastContentDetailsStereoLayoutEnum;
}
