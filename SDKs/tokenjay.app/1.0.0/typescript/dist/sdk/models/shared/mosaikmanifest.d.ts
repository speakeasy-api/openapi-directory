import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MosaikManifestTargetCanvasDimensionEnum {
    CompactWidth = "COMPACT_WIDTH",
    MediumWidth = "MEDIUM_WIDTH",
    FullWidth = "FULL_WIDTH"
}
export declare class MosaikManifest extends SpeakeasyBase {
    appDescription?: string;
    appName?: string;
    appVersion?: number;
    cacheLifetime?: number;
    errorReportUrl?: string;
    iconUrl?: string;
    notificationCheckUrl?: string;
    onAppLoadedAction?: string;
    onResizeAction?: string;
    targetCanvasDimension?: MosaikManifestTargetCanvasDimensionEnum;
    targetMosaikVersion?: number;
}
