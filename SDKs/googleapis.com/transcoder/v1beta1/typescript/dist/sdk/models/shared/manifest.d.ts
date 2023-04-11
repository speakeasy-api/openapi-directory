import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Type of the manifest, can be "HLS" or "DASH".
 */
export declare enum ManifestTypeEnum {
    ManifestTypeUnspecified = "MANIFEST_TYPE_UNSPECIFIED",
    Hls = "HLS",
    Dash = "DASH"
}
/**
 * Manifest configuration.
 */
export declare class Manifest extends SpeakeasyBase {
    /**
     * The name of the generated file. The default is `"manifest"` with the extension suffix corresponding to the `Manifest.type`.
     */
    fileName?: string;
    /**
     * Required. List of user given `MuxStream.key`s that should appear in this manifest. When `Manifest.type` is `HLS`, a media manifest with name `MuxStream.key` and `.m3u8` extension is generated for each element of the `Manifest.mux_streams`.
     */
    muxStreams?: string[];
    /**
     * Required. Type of the manifest, can be "HLS" or "DASH".
     */
    type?: ManifestTypeEnum;
}
